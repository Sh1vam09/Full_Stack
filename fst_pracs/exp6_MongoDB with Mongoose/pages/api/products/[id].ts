import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/mongodb'
import Product from '../../../models/Product'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()
  const { method } = req
  const { id } = req.query

  switch (method) {
    case 'GET':
      // GET: Retrieve a specific product
      try {
        const product = await Product.findById(id)
        if (!product) {
          return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch product' })
      }
      break

    case 'PUT':
      // PUT: Update a product
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: product })
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message })
      }
      break

    case 'DELETE':
      // DELETE: Delete a product
      try {
        const product = await Product.deleteOne({ _id: id })
        if (!product.deletedCount) {
          return res.status(404).json({ success: false, error: 'Product not found' })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to delete product' })
      }
      break

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
