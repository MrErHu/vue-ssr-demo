import { createApp } from './app'

export default function (context) {
    return new Promise((resolve, reject) => {
        const {app, store, router} = createApp()
        router.push(context.url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if(matchedComponents.length <= 0){
                return reject({ code: 404 })
            }else {
                Promise.all(matchedComponents.map((component) => {
                    if(component.asyncData){
                        return component.asyncData({
                            store,
                            route: router.currentRoute
                        })
                    }
                })).then(()=> {
                    context.state = store.state
                    resolve(app)
                })
            }
        }, reject)

    })
}
