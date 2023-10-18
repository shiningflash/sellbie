import React, { useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import { GET_ALL_PRODUCTS } from "../graphql/queries/getProducts"
import { useQuery } from "@apollo/client"
import ProductMain from "../components/ProductMain"

function Product() {
    const loadMoreRef = React.useRef(null)

  const { data, loading, fetchMore } = useQuery(GET_ALL_PRODUCTS, {
    variables: { skip: 0, take: 2 },
  })

  const loadMoreProducts = async () => {
    try {
      await fetchMore({
        variables: {
          skip: data?.getProducts.length || 0,
          take: 2,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          const newProducts = fetchMoreResult.getProducts.filter(
            (newProduct) => !prev.getProducts.some((product) => product.id === newProduct.id)
          )
          return {
            getProducts: [...prev.getProducts, ...newProducts],
          }
        },
      })
      console.log(data)
    } catch (error) {
      console.error("Error fetching more products:", error)
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Observer triggered")
          loadMoreProducts()
        }
      },
      { threshold: 1 }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current)
      }
    }
  }, [loadMoreProducts])

  console.log(data?.getProducts)

  return (
    <MainLayout>
      <div className="pt-[80px] w-[calc(100%-90px)] max-w-[690px] ">
        {data?.getProducts.map((product, index: number) => (
          <ProductMain key={index} product={product} />
        ))}
        <div className="h-20" ref={loadMoreRef}></div>
      </div>
    </MainLayout>
  )
}

export default Product;