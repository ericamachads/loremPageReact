import React from 'react'
import SimpleForm from '../components/SimpleForm'
import ListProducts from '../components/products/ListProducts'

const Home = () => {
  const [isAnimationVisible, setAnimationVisible]=React.useState(false);
  React.useEffect(()=>{
    const animationTimeout = setTimeout(() => {
      setAnimationVisible(true);
    }, 100);
    return ()=>clearTimeout(animationTimeout);
  },[])
  return (
    <main>
      <section className="sectionPrimary">
        <div className="container content">
          <div className={`animationLeft ${isAnimationVisible?'showAnimation':''}`}>
            <h1>Lorem ipsum dolor <br/> sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Repellat blanditiis similique.</p>
          </div>
          <div className={`animationRight ${isAnimationVisible?'showAnimation':''}`}>
            <SimpleForm/>
          </div>
        </div>
      </section>
      <section className="sectionOportunities container">
        <h1 className="title">Oportunities</h1>
        <div className="oportunities">
          <div className="oportunity">
            <span>1</span>
            <h2>Oportunity 1</h2>
            <button className="buttonSecondary">See More</button>
          </div>
          <div className="oportunity">
            <span>2</span>
            <h2>Oportunity 2</h2>
            <button className="buttonSecondary">See More</button>
          </div>
          <div className="oportunity">
            <span>3</span>
            <h2>Oportunity 3</h2>
            <button className="buttonSecondary">See More</button>
          </div>
          <div className="oportunity">
            <span>4</span>
            <h2>Oportunity 4</h2>
            <button className="buttonSecondary">See More</button>
          </div>
        </div>
      </section>
      <section className="sectionDepoiment">
        <div className="container content">
          <div className="image"></div>
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis quam nisi excepturi voluptates dicta.</q>
        </div>
      </section>
      <section className="sectionProducts container">
        <h1 className="title">Best Products</h1>
        <ListProducts/>
      </section>
    </main>
  )
}

export default Home