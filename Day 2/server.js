import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app=express()
app.use('/api/products', productRoutes)

connectDB()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message:"welcome to the RESTful API"})
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server run on Port ${PORT}`)
})