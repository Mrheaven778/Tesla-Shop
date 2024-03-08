import ProductGrid from "@/components/products/product-grid/ProductGrid"
import Title from "@/components/ui/title/Title"
import { TopMenuItems } from "@/config/TopMenu"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    id: string
  }
}

function CategoryPage({ params }: CategoryPageProps) {
  const items = TopMenuItems
  const { id } = params
  let nameCategory = ""
  if (!items.find(item => item.dirrecion === id)) {
    notFound()
  } else {
    const foundItem = items.find(item => item.dirrecion === id)
    if (foundItem) {
      nameCategory = foundItem.nombre
    }
  }
  const products = initialData.products.filter(product => product.gender === id)

  return (
    <>
      <Title title={`Articulos de ${nameCategory}`} subtitle={`Todos los productos de ${nameCategory}`} className="mb-2"/>
      <ProductGrid products={products} />
    </>
  )
}

export default CategoryPage