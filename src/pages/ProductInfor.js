// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProductInfor.css";

// const ProductInfor = () => {
//   const navigate = useNavigate();

//   const onFrameContainerClick = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onFrameContainer1Click = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onFrameContainer2Click = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onFrameContainer3Click = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   return (
//     <div className="product-infor">
//       <div className="macbook-air-5">
//         <div className="nutryfood-parent">
//           <div className="nutryfood">NUTRYFOOD</div>
//           <div className="crowned-with-innovations">
//             CROWNED WITH INNOVATIONS
//           </div>
//         </div>
//         <div className="home-parent">
//           <div className="home">Home</div>
//           <div className="home">About Us</div>
//           <div className="home">Products</div>
//           <div className="home">Contact Us</div>
//         </div>
//         <div className="component-38-parent">
//           <img className="component-38-icon" alt="" src="/component-38.svg" />
//           <img className="component-38-icon" alt="" src="/component-39.svg" />
//           <img className="component-38-icon" alt="" src="/component-40.svg" />
//           <img className="component-38-icon" alt="" src="/component-41.svg" />
//           <img className="component-38-icon" alt="" src="/component-42.svg" />
//         </div>
//         <div className="nutryfood-all-rights">
//           © 2024, NutryFood. All rights reserved.
//         </div>
//       </div>
//       <div className="heart-2-2-parent">
//         <img className="heart-2-2" alt="" src="/heart-2-2.svg" />
//         <div className="stand-up-pouch-bag-mockup-2-parent">
//           <img
//             className="stand-up-pouch-bag-mockup-2"
//             alt=""
//             src="/standup-pouch-bag-mockup-2-3@2x.png"
//           />
//           <img
//             className="masala-dosa-served-with-sambha-icon"
//             alt=""
//             src="/masaladosaservedwithsambharcoconutchutneyisolatedwhitebackgroundtop-247037450removebgpreview-1@2x.png"
//           />
//         </div>
//       </div>
//       <div className="stand-up-pouch-bag-mockup-2-wrapper">
//         <img
//           className="stand-up-pouch-bag-mockup-21"
//           alt=""
//           src="/standup-pouch-bag-mockup-2-3@2x.png"
//         />
//       </div>
//       <div className="stand-up-pouch-bag-mockup-2-container">
//         <img
//           className="stand-up-pouch-bag-mockup-21"
//           alt=""
//           src="/standup-pouch-bag-mockup-2-3@2x.png"
//         />
//       </div>
//       <div className="stand-up-pouch-bag-mockup-2-frame">
//         <img
//           className="stand-up-pouch-bag-mockup-21"
//           alt=""
//           src="/standup-pouch-bag-mockup-2-3@2x.png"
//         />
//       </div>
//       <div className="masala-dosa-served-with-sambha-wrapper">
//         <img
//           className="masala-dosa-served-with-sambha-icon1"
//           alt=""
//           src="/masaladosaservedwithsambharcoconutchutneyisolatedwhitebackgroundtop-247037450removebgpreview-1@2x.png"
//         />
//       </div>
//       <div className="product-infor-inner">
//         <div className="dosa-powder-parent">
//           <div className="dosa-powder">Dosa Powder</div>
//           <div className="frame-parent">
//             <div className="star-wrapper">
//               <img className="frame-child" alt="" src="/star-1.svg" />
//             </div>
//             <div className="parent">
//               <b className="b">(5)</b>
//               <b className="reviews">8769 Reviews</b>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="frame-group">
//         <div className="frame-wrapper">
//           <div className="frame-container">
//             <div className="macbook-air-2-wrapper">
//               <div className="macbook-air-2">
//                 <div className="buy-now-wrapper">
//                   <div className="home">Buy Now</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="domestic-international-marke-parent">
//           <div className="domestic-international-container">
//             <span>●</span>
//             <span className="domestic-international">{` Domestic & International Markets- Accessible worldwide and everywhere`}</span>
//           </div>
//           <div className="why-nutryfoods-parent">
//             <div className="home">Why NutryFoods?</div>
//             <div className="group-div">
//               <div className="group-parent">
//                 <img className="frame-item" alt="" src="/group-190.svg" />
//                 <div className="home">Best Quality</div>
//               </div>
//               <div className="group-container">
//                 <img className="frame-item" alt="" src="/group-191.svg" />
//                 <div className="home">Prevention-Free</div>
//               </div>
//               <div className="frame-div">
//                 <img className="frame-item" alt="" src="/group-192.svg" />
//                 <div className="home">Chemical-Free</div>
//               </div>
//               <div className="group-parent1">
//                 <img className="frame-item" alt="" src="/group-193.svg" />
//                 <div className="home">Best Taste</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="frame-parent1">
//         <div className="description-parent">
//           <div className="home">DESCRIPTION</div>
//           <div className="provides-a-balanced">
//             ● Provides a balanced combination of carbohydrates (Rice) and
//             protein (Lentils) and helps in preparing a quick and healthy
//             breakfast
//           </div>
//         </div>
//         <div className="description-parent">
//           <div className="home">INGREDIENTS</div>
//           <div className="provides-a-balanced">
//             ● Rice Flour (70%), Urad Dal Flour, Chana Dal Flour, Iodized salt,
//             Acidity regulator (INS 296), and fenugreek seeds
//           </div>
//         </div>
//         <div className="description-parent">
//           <div className="home">METHODS OF PREPARATION</div>
//           <div className="provides-a-balanced">
//             ● Pour the contents from the pouch into the bowl and mix water to
//             meet the consistency of the regular batter.
//           </div>
//         </div>
//         <div className="description-parent">
//           <div className="home">COOKING TIP</div>
//           <div className="provides-a-balanced">
//             ● 10 mins continuous stirring is mandatory to get a good consistency
//             of the batter and crisp dosa.
//           </div>
//         </div>
//         <div className="description-parent">
//           <div className="home">NUTRITION INFORMATION</div>
//           <div className="frame-parent2">
//             <div className="frame-parent3">
//               <div className="nutrients-wrapper">
//                 <div className="nutrients">Nutrients</div>
//               </div>
//               <div className="unit-wrapper">
//                 <div className="nutrients">Unit</div>
//               </div>
//               <div className="values-wrapper">
//                 <div className="nutrients">Values</div>
//               </div>
//             </div>
//             <div className="frame-parent4">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Energy</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">kcal</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">320320</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Protein</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">11.0</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Carbohydrates (g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">63.0</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Total Sugar(g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">1.01</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Dietary Fiber (g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">7.49</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Total Fat (g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">5.10</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Trans fat (g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">Nil</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Cholesterol (g)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">g</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">Nil</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Potassium (mg)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">mg</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">358.48</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="energy-wrapper">
//                 <div className="nutrients">Iron (mg)</div>
//               </div>
//               <div className="kcal-wrapper">
//                 <div className="nutrients">mg</div>
//               </div>
//               <div className="energy-wrapper">
//                 <div className="nutrients">2.04</div>
//               </div>
//             </div>
//             <div className="star-wrapper">
//               <div className="calcium-mg-wrapper">
//                 <div className="nutrients">Calcium (mg)</div>
//               </div>
//               <div className="mg-frame">
//                 <div className="nutrients">mg</div>
//               </div>
//               <div className="calcium-mg-wrapper">
//                 <div className="nutrients">26.25</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="frame-parent15">
//         <div className="frame-parent16">
//           <div className="ratings-reviews-parent">
//             <div className="home">{`Ratings & Reviews`}</div>
//             <div className="frame-parent17">
//               <div className="frame-parent18">
//                 <div className="star-parent">
//                   <img className="frame-child" alt="" src="/star-1.svg" />
//                   <b className="b">4.5</b>
//                 </div>
//                 <div className="overall-course-rating">
//                   Overall Course rating
//                 </div>
//               </div>
//               <div className="home">(4,678 ratings)</div>
//             </div>
//           </div>
//           <div className="view-more">View more</div>
//         </div>
//         <div className="frame-parent19">
//           <div className="ellipse8-31-reviewss-31-home-parent">
//             <img
//               className="ellipse8-31-reviewss-31-home-icon"
//               alt=""
//               src="/ellipse831reviewss31home@2x.png"
//             />
//             <div className="frame-parent20">
//               <div className="nani-31-reviewss-31-home-parent">
//                 <div className="home">Nani Chinchula</div>
//                 <div className="frame-parent21">
//                   <div className="star-group">
//                     <img className="frame-child" alt="" src="/star-1.svg" />
//                     <div className="helpful-31-group17-31-reviewss">4.5</div>
//                   </div>
//                   <div className="september2023-31-reviewss-31-h">
//                     a Week ago
//                   </div>
//                 </div>
//               </div>
//               <div className="entireexperiencefromcheckintoc-parent">
//                 <div className="entireexperiencefromcheckintoc">{`Entire experience from check in to check out, welcome from hotel staff guideiing to room. Polite staff, easily accessible on Baga Calangute road. `}</div>
//                 <div className="frame-parent22">
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img
//                       className="group23-31-likedislike-31-revi-icon"
//                       alt=""
//                       src="/group2331likedislike31reviewss31home.svg"
//                     />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Helpful
//                     </div>
//                   </div>
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img className="frame-child3" alt="" src="/group-165.svg" />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Not Helpful
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ellipse8-31-reviewss-31-home-parent">
//             <img
//               className="ellipse8-31-reviewss-31-home-icon"
//               alt=""
//               src="/ellipse831reviewss31home@2x.png"
//             />
//             <div className="frame-parent20">
//               <div className="nani-31-reviewss-31-home-parent">
//                 <div className="home">Nani Chinchula</div>
//                 <div className="frame-parent21">
//                   <div className="star-group">
//                     <img className="frame-child" alt="" src="/star-1.svg" />
//                     <div className="helpful-31-group17-31-reviewss">4.5</div>
//                   </div>
//                   <div className="september2023-31-reviewss-31-h">
//                     a Week ago
//                   </div>
//                 </div>
//               </div>
//               <div className="entireexperiencefromcheckintoc-parent">
//                 <div className="entireexperiencefromcheckintoc">{`Entire experience from check in to check out, welcome from hotel staff guideiing to room. Polite staff, easily accessible on Baga Calangute road. `}</div>
//                 <div className="frame-parent22">
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img
//                       className="group23-31-likedislike-31-revi-icon"
//                       alt=""
//                       src="/group2331likedislike31reviewss31home.svg"
//                     />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Helpful
//                     </div>
//                   </div>
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img className="frame-child3" alt="" src="/group-165.svg" />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Not Helpful
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ellipse8-31-reviewss-31-home-parent">
//             <img
//               className="ellipse8-31-reviewss-31-home-icon"
//               alt=""
//               src="/ellipse831reviewss31home@2x.png"
//             />
//             <div className="frame-parent20">
//               <div className="nani-31-reviewss-31-home-parent">
//                 <div className="home">Nani Chinchula</div>
//                 <div className="frame-parent21">
//                   <div className="star-group">
//                     <img className="frame-child" alt="" src="/star-1.svg" />
//                     <div className="helpful-31-group17-31-reviewss">4.5</div>
//                   </div>
//                   <div className="september2023-31-reviewss-31-h">
//                     a Week ago
//                   </div>
//                 </div>
//               </div>
//               <div className="entireexperiencefromcheckintoc-parent">
//                 <div className="entireexperiencefromcheckintoc">{`Entire experience from check in to check out, welcome from hotel staff guideiing to room. Polite staff, easily accessible on Baga Calangute road. `}</div>
//                 <div className="frame-parent22">
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img
//                       className="group23-31-likedislike-31-revi-icon"
//                       alt=""
//                       src="/group2331likedislike31reviewss31home.svg"
//                     />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Helpful
//                     </div>
//                   </div>
//                   <div className="group23-31-likedislike-31-revi-parent">
//                     <img className="frame-child3" alt="" src="/group-165.svg" />
//                     <div className="helpful-31-group17-31-reviewss">
//                       Not Helpful
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="people-also-order-these-parent">
//         <div className="home">People also order these</div>
//         <div className="frame-parent29">
//           <div className="frame-parent30" onClick={onFrameContainerClick}>
//             <div className="group-wrapper">
//               <div className="stand-up-pouch-bag-mockup-2-group">
//                 <img
//                   className="stand-up-pouch-bag-mockup-24"
//                   alt=""
//                   src="/standup-pouch-bag-mockup-2-3@2x.png"
//                 />
//                 <img
//                   className="masala-dosa-served-with-sambha-icon2"
//                   alt=""
//                   src="/masaladosaservedwithsambharcoconutchutneyisolatedwhitebackgroundtop-247037450removebgpreview-1@2x.png"
//                 />
//               </div>
//             </div>
//             <div className="dosa-powder-wrapper">
//               <div className="home">Dosa Powder</div>
//             </div>
//             <div className="buy-now-container">
//               <div className="home">Buy Now</div>
//             </div>
//             <div className="off-wrapper">
//               <div className="off">10% off</div>
//             </div>
//           </div>
//           <div className="frame-parent30" onClick={onFrameContainer1Click}>
//             <div className="group-wrapper">
//               <div className="stand-up-pouch-bag-mockup-1-parent">
//                 <img
//                   className="stand-up-pouch-bag-mockup-1"
//                   alt=""
//                   src="/standup-pouch-bag-mockup-1-1@2x.png"
//                 />
//                 <img className="image-94-icon" alt="" src="/image-94@2x.png" />
//               </div>
//             </div>
//             <div className="dosa-powder-wrapper">
//               <div className="home">Idly Powder</div>
//             </div>
//             <div className="buy-now-container">
//               <div className="home">Buy Now</div>
//             </div>
//             <div className="off-wrapper">
//               <div className="off">10% off</div>
//             </div>
//           </div>
//           <div className="frame-parent30" onClick={onFrameContainer2Click}>
//             <div className="group-wrapper">
//               <div className="stand-up-pouch-bag-mockup-3-parent">
//                 <img
//                   className="stand-up-pouch-bag-mockup-3"
//                   alt=""
//                   src="/standup-pouch-bag-mockup-3-2@2x.png"
//                 />
//                 <img className="image-96-icon" alt="" src="/image-96@2x.png" />
//               </div>
//             </div>
//             <div className="dosa-powder-wrapper">
//               <div className="home">Millet Idly Powder</div>
//             </div>
//             <div className="buy-now-container">
//               <div className="home">Buy Now</div>
//             </div>
//             <div className="off-wrapper">
//               <div className="off">10% off</div>
//             </div>
//           </div>
//           <div className="frame-parent30" onClick={onFrameContainer3Click}>
//             <div className="group-wrapper">
//               <div className="stand-up-pouch-bag-mockup-4-parent">
//                 <img
//                   className="stand-up-pouch-bag-mockup-4"
//                   alt=""
//                   src="/standup-pouch-bag-mockup-4-2@2x.png"
//                 />
//                 <img
//                   className="ragi-dosa-healthy-south-indian-icon"
//                   alt=""
//                   src="/ragidosahealthysouthindian600w2094559492transformedremovebgpreview-1@2x.png"
//                 />
//               </div>
//             </div>
//             <div className="dosa-powder-wrapper">
//               <div className="home">Millet Dosa Powder</div>
//             </div>
//             <div className="buy-now-container">
//               <div className="home">Buy Now</div>
//             </div>
//             <div className="off-wrapper">
//               <div className="off">10% off</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="products-parent">
//         <b className="breakfast">Products</b>
//         <b className="breakfast">{`>`}</b>
//         <b className="breakfast">Breakfast</b>
//         <b className="breakfast">{`>`}</b>
//         <b className="mix-powders">Mix Powders</b>
//       </div>
//       <div className="macbook-air-6-parent">
//         <div className="macbook-air-6">
//           <img className="macbook-air-6-child" alt="" src="/frame-251.svg" />
//           <div className="access-context-manager-svgrepo-parent">
//             <img
//               className="access-context-manager-svgrepo-icon"
//               alt=""
//               src="/accesscontextmanager-svgrepocom.svg"
//             />
//             <img className="vector-icon" alt="" src="/vector.svg" />
//             <div className="nutryfood1">NUTRYFOOD</div>
//             <b className="crowned-with-innovations1">
//               CROWNED WITH INNOVATIONS
//             </b>
//           </div>
//           <div className="component-58-parent">
//             <img className="component-38-icon" alt="" src="/component-58.svg" />
//             <div className="domestic-international1">{`Domestic & International Markets- Accessible worldwide and everywhere`}</div>
//           </div>
//         </div>
//         <div className="macbook-air-51">
//           <div className="frame-parent34">
//             <div className="nani-31-reviewss-31-home-parent">
//               <div className="home">Home</div>
//               <img className="frame-child8" alt="" src="/vector-18.svg" />
//             </div>
//             <div className="nani-31-reviewss-31-home-parent">
//               <div className="home">About Us</div>
//               <img className="frame-child9" alt="" src="/vector-19.svg" />
//             </div>
//             <div className="nani-31-reviewss-31-home-parent">
//               <div className="home">Products</div>
//               <img className="frame-child10" alt="" src="/vector-20.svg" />
//             </div>
//             <div className="nani-31-reviewss-31-home-parent">
//               <div className="home">Contact Us</div>
//               <img className="frame-child9" alt="" src="/vector-21.svg" />
//             </div>
//           </div>
//           <div className="phone-2-1-parent">
//             <img className="mdiwhatsapp-icon" alt="" src="/phone-2-1.svg" />
//             <img className="mdiwhatsapp-icon" alt="" src="/mail-1-1.svg" />
//             <img className="mdiwhatsapp-icon" alt="" src="/mdiwhatsapp.svg" />
//           </div>
//         </div>
//       </div>
//       <div className="group-parent5">
//         <img className="group-child" alt="" src="/group-193.svg" />
//         <img className="image-89-icon" alt="" src="/image-89@2x.png" />
//       </div>
//     </div>
//   );
// };

// export default ProductInfor;
