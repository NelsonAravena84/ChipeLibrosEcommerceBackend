import type { Request, Response } from 'express';

import { PrismaClient } from '../../generated/prisma/client.js'
const prisma = new PrismaClient();


export const obtenerProductos = async (req: Request, res: Response) =>{
    try{
        const productos = await prisma.productos.findMany({
            where: { is_active: true}
        });

    res.json(productos);
    }catch (error){
        console.error(error);
        res.status(500).json({ error: "Error al obtener los productos"});
    }
};

