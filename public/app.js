if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then((reg) => console.log('Success', reg))
    .catch((error) => console.log('error: ', error))
}