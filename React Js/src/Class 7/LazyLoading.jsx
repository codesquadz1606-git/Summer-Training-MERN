import React, { lazy, Suspense } from 'react'

const LazyLoading = () => {
    // Lazy loading is a technique where components , images or resources are loaded only when they are needed instead of loading everytime when application starts.

    
  const Dashboard=lazy(()=>
    import("./AllComponents/Dashboard")
  )

  return(
    <>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Dashboard/>
        </Suspense>
    </>
  )
}

export default LazyLoading;
