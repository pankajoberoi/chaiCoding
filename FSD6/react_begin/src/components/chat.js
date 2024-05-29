export function createConnection(serverUrl,roomId){

return {
    connect(){
        console.log(`Connected to ${roomId} room at ${serverUrl} ....`)
    },
    disconnect(){
        console.log(`Disconnected from ${roomId} room at ${serverUrl}`)
    }
}



}