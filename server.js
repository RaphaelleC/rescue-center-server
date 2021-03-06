import app from './app.js'
import connectToDb from './db/connectToDb.js'

async function startApp() {
  try {
    await connectToDb()
    console.log('Database has connected !')
    app.listen(4000, () => console.log('Express is now running'))
  } catch (e) {
    console.log('Somthing went wrong starting the app :(')
    console.log(e)
  }
}

startApp()
