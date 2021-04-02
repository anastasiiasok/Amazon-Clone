# Amazon-Clone

## It’s a complete e-commerce web application with a payment process.

Part 1: Created components (Header, Home and Checkout), Header CSS, installed Material-UI icons and created Routes and Links.

Part 2: Created Home.css and added styles. Added Homepage image to the home page.

Part 3 : Created DataBase with products and images.

Part 4 : Passed products as props to a .map on my data arrays to products , then I deconstructed product from my component function and included every detail into the products components.

<p align="center">
  <img width="700" height="400" src="https://github.com/anastasiiasok/Amazon-Clone/blob/main/my-app/public/read.me.png">
</p>

Part 5: Installed Firebase and created a collection with product fields. 
created firebase.js and entered information from config (imported firebase from "firebase", initializedApp and created db and exported).
When I go ahead and pull data from firebase , what's going to happen is I'm going to save that in a state and it's a snapshot and time of the actual application. So app will have a state of products.
<p align="center">
  <img width="700" height="350" src="https://github.com/anastasiiasok/Amazon-Clone/blob/main/my-app/public/screen.png">
</p>
What's going to happen is these products are going to go into a database of the app itself.
If I have it in the state , using that state I can actually go ahead and show it on the actual web page.
This is a flow: we get it from DB, say it to the state from the state show it on the web page. When we add New products , everytime you out to the state. So, React updates automatically. Also installed react-slick and slick-carousel to make Home slider for home page.

Part 6: Created and designed Footer & Categories component.

Part 7 : I needed to devide CartItem component into rows and colomuns, so for that I created following componenents (ImageContainer,CartItemInfo,CartItemInfoTop,DetailsContainer,PrimeContainer, Prime,GiftContainer,Checkbox,ProductDetailsContainer,ProductDetails,CartItemInfoBottom,CartItemQuantityContainer,CartItemDeleteContainer,CartItemPrice,PriceContainer,PrimeShippingContainer).
It has 2 horizontal and 1 a vertical component.

<p align="center">
  <img width="700" height="350" src="https://github.com/anastasiiasok/Amazon-Clone/blob/main/my-app/public/part6.png">
</p>



