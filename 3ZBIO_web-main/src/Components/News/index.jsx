import React from 'react'


const News = () => {
  return (
 <div className="flex flex-col min-h-screen justify-between items-center text-center">
    <div className="bg-gray-100 py-16 mt-4">
    <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple post with meta info</h1>
        <div className="flex justify-center items-center mb-4">
            <span className="block w-8 h-1 bg-blue-500 mr-2"></span>
            <span className="block w-2 h-1 bg-blue-500"></span>
            <span className="block w-4 h-1 bg-blue-500 ml-2"></span>
        </div>
        <p className="text-gray-600 max-w-xl mx-auto">
            The simplicity brings elegance. Show the feature image, date, and the title to grasp the attention of your website visitors.
        </p>
    </div>
</div>

</div>
    
  );
}

export default News
