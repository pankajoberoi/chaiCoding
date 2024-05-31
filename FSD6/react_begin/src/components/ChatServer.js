export function createConnection(serverUrl,roomId){
    return {
        connect(){
            console.log(`connected to ${roomId} at ${serverUrl}`)
        },
        disconnect(){
            console.log(`Disconnect to ${roomId} at ${serverUrl}`)
        }
    }
}