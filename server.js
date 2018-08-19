const fs = require("fs")
const express = require("express")
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync("./src/index.template.html", "utf-8")
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')


const app = express();
app.use("/dist", express.static("dist"))

const renderer = createBundleRenderer(bundle, {
    template,
    clientManifest
})

app.get('*', (req, res) => {

    const context = {
        url: req.url
    }

    renderer.renderToString(context, function (err, html) {
        res.end(html)
    })
})

app.listen(8080, function () {
    console.log("server start and listen port 8080")
})
