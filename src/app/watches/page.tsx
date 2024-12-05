
import React from 'react';
import Image from 'next/image'



const Watches = () => {

  const watchData = [
    { id: 1, name: 'Rolex', price: 15000, description: 'Luxury watch', image: '/watch1.jpg'},
    { id: 2, name: 'Rolex', price: 10000, description: 'Luxury watch', image: '/watch2.jpg'},
    { id: 3, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/watch3.jpg'},
    { id: 4, name: 'Rolex', price: 9000, description: 'Luxury watch', image: '/watch4.jpg'},
    { id: 5, name: 'Rolex', price: 8000, description: 'Luxury watch', image: '/watch5.jpg'},
    { id: 6, name: 'Rolex', price: 18000, description: 'Luxury watch', image: '/watch6.jpg'},
    
 ]
  return (
    // 
    

    <div>
      <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            {/* Use Image component instead of img */}
            <Image 
              src={watch.image} 
              alt={watch.name} 
              width={300} 
              height={300} // Set dimensions to optimize performance
            />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Cart</button>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Watches