import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Form from "../pages/Form"
import ConfirmationModal from "./ConfirmationModal"
import TravelComponent from "../home/TravelComponent/TravelComponent"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          {/* <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} /> */}
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/Form' component={Form} />
          <Route exact path='/ConfirmationModal' component={ConfirmationModal} />
          <Route exact path='/TravelComponent' component={TravelComponent} />


        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
