import React from "react"
import Logo from "../../../assets/Logo/Logo-Full-Light.png"
import {TiSocialFacebookCircular , TiSocialYoutube,TiSocialInstagram ,TiSocialLinkedin,TiSocialTwitter} from "react-icons/ti"


const Footer = () => {
    return (
<footer class="bg-richblack-700 grid py-16 w-full mt-[100px]">
    <div class="grid grid-cols-6 space-x-14 w-10/12 h-full  mx-auto relative left-20  ">
      <div class=" space-y-6 text-richblack-100 font-inter  text-[0.9rem] relative">
        <img class="w-80  h-10" src={Logo}   alt="Study Notion Logo" />
        <hi className="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">Company</hi>
        <ul class="mt-3 text-[1.03rem] space-y-1">
         <li  class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 ">About</li>
         <li  class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Careers</li>
         <li  class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Affiliates</li>
        </ul>
        <br/>
        <div className='flex flex-row space-x-1 -ml-[1rem] '>
         <TiSocialYoutube className='w-[3rem] h-[2rem] cursor-pointer'/>
         <TiSocialInstagram className='w-[3rem] h-[2rem] cursor-pointer' />
         <TiSocialLinkedin className='w-[3rem] h-[2rem] cursor-pointer' />
         <TiSocialTwitter className='w-[3rem] h-[2rem] cursor-pointer' />
         <TiSocialFacebookCircular className='w-[3rem] h-[2rem] cursor-pointer' />
        </div>
      </div>

      <div class=" relative flex flex-col w-full  space-y-9">
        <div class="relative w-full">
        <h1 class=" text-richblack-100  font-inter font-semibold w-full z-0 text-[1.08rem]">Resources</h1>
        <ul class="mt-3 text-[1.03rem] space-y-1">
           <li class="font-inter text-richblack-600  cursor-pointer hover:text-richblack-300">Article</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Blog</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Chart Sheet</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Code challenges </li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Docs </li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Projects</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Videos</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Workspaces</li>
        </ul>
        </div>
        <div class="relative flex flex-col w-full  space-y-3">
          <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">Support</h1>
          <ul class="mt-3 text-[1.03rem] space-y-1">
             <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Help Center</li>            </ul>
          </div>
          </div>
          <div class=" relative flex flex-col w-full  space-y-9">
          <div>
            <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">BECOME A PARTNER</h1>
            <ul class="mt-3 text-[1.03rem] space-y-1">
               <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Refer and Earn</li>
              <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Onboarding APIs</li>
              </ul>
            </div>
            <div>
              <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">MORE</h1>
              <ul class="mt-3 text-[1.03rem] space-y-1">
                 <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">ROUTE</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Invoices</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Freelancer Payments</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">International</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Flash Checkout</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">UPI</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">ePOS</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Checkout Demo</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">RazorpayX Payroll</li>
            
      
              </ul>
              </div>
      </div>

      <div class=" relative flex flex-col w-full  space-y-9">
        <div class="relative w-full">
        <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">ACCEPT PAYMENTS</h1>
        <ul class="mt-3 text-[1.03rem] space-y-1">
           <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Payment Gateway</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Payment Pages</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Payment Links</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">QR Codes</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Subscription</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Smart Collect</li>
        </ul>
        </div>
        <div class="relative flex flex-col w-full  space-y-3">
          <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">DEVELOPERS</h1>
          <ul class="mt-3 text-[1.03rem] space-y-1">
             <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Docs</li>
            <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Integration</li>
            <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">API Reference</li>
            </ul>
          </div>
          <div>
            <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">RESOURCES</h1>
            <ul class="mt-3 text-[1.03rem] space-y-1">
               <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Blog</li>
              <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Customer Stories</li>
              <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Events</li>
              <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Chargeback Guide</li>
              <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Settlement Guide</li>
             
             
              </ul>
            </div>
            <div>
              <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">SOLUTIONS</h1>
              <ul class="mt-3 text-[1.03rem] space-y-1">
                 <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Education</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >E-commerce</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">SaaS</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">BFSI</li>
                </ul>
                </div>

                <div>
                  <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">SOLUTIONS</h1>
                  <ul class="mt-3 text-[1.03rem] space-y-1">
                  
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">FREE TOOLS</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">GST Calculator</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Online TDS Payment</li>
                <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">GST Number Search <div class="w-14 h-5 bg-green-600 text-white font-semibold text-center rounded text-md fony-inter mx-auto mt-1">NEW</div> </li>
                
              </ul>
              </div>
      </div>
      <div class=" relative flex flex-col w-full  space-y-9">
        <div class="relative w-full">
        <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">COMPANY</h1>
        <ul class="mt-3 text-[1.03rem] space-y-1">
           <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">About Us</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Careere</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Terms of Use</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Privacy Policy </li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Grievance Redressal</li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Responsible Disclosure  </li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">Partners </li>
          <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300 flex">White papers</li>
       
        </ul>
        </div>
        <div class="relative flex flex-col w-full  space-y-3">
          <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">HELP & SUPPORT</h1>
          <ul class="mt-3 text-[1.03rem] space-y-1">
             <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300">Support</li>
            <li class="font-inter text-richblack-400  cursor-pointer hover:text-richblack-300" >Knowledge base</li>
            </ul>
          </div>
            <div>
              <h1 class="text-richblack-100 font-inter font-semibold w-full z-0 text-[1.08rem]">REGD. OFFICE ADDRESS</h1>
              <div class="mt-3 text-[1.03rem] space-y-1">
                <div class="font-inter text-black max-w-[14.2rem]">
                Razorpay Software Private Limited,
                1st Floor, SJR Cyber,
                22 Laskar Hosur Road,Adugodi,
                Bengaluru,560030,
                Karnataka,India
                CIN:U72200KA2013PTC097389
                </div>
              
              </div>
              </div>
              <div class="font-inter">
                <p>© Razorpay 2023 </p>
                <p> All Rights Reserved</p>
               </div>  
      </div>

      

    </div>
  </footer>

)};


export default Footer