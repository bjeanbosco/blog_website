import "../globals.css"

const About  = ()=>{




    return (
        <div className="pt-16">
            <header className="text-center py-5 px-0 h-96 pb-9  about">
        <h1 className="text-5xl text-green-400 font-extrabold py-8">About Us</h1>
    </header>
    <div className="container max-w-4xl m-auto p-5">
        <h2 className="mb-5 text-4xl">Welcome to our Programming Blog!</h2>
        <p className="mb-5">We are passionate about programming and technology, and our blog is dedicated to sharing our knowledge, experiences, and insights with fellow enthusiasts, beginners, and experts alike.</p>
        
        <h2 className="mb-5 text-4xl">Our Mission</h2>
        <p className="mb-5">Our mission is to provide high-quality, informative, and engaging content that empowers our readers to become better programmers, solve real-world problems, and stay updated with the latest trends and technologies in the ever-evolving world of software development.</p>
        
        <h2 className="mb-5 text-4xl">What You'll Find Here</h2>
        <p className="mb-5">On our blog, you'll find a wide range of topics related to programming, including:</p>
        <ul className="mb-5">
            <li className="mb-3">Tutorials and guides for various programming languages and frameworks</li>
            <li className="mb-3">Tips and best practices for software development</li>
            <li className="mb-3">Interview tips and career advice for aspiring developers</li>
            <li className="mb-3">Insights into emerging technologies and industry trends</li>
            <li className="mb-3">Project showcases and case studies</li>
            <li className="mb-3">And much more!</li>
        </ul>
        
        <h2 className="mb-5 text-4xl">Meet the Team</h2>
        <p className="mb-5">Our team consists of experienced developers, designers, and writers who are passionate about sharing their knowledge and expertise. We are dedicated to providing valuable content and helping our readers succeed in their programming journey.</p>
        
        <h2 className="mb-5 text-4xl">Contact Us</h2>
        <p className="mb-5">We love hearing from our readers! Whether you have feedback, suggestions, or just want to say hello, feel free to <a href="contact.html">contact us</a>.</p>
    </div>
        </div>
    )
}

export default About