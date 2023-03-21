export interface Recipe {
    id: number
    nombre: string
    imagen: string
    descripcion?: string
    tiempoPreparacion: number
    ingredientes: string[]
    pasos: string[]
    porciones: number
    tipoComida?: string
}
