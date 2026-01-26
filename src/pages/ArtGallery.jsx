import React from 'react';
import './Gallery.css';

const ArtGallery = () => {

  const cards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1657356217561-6ed26b47e116?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tribal Mark (Ila)",
      author: "Adegbite Adesola",
      category: "Culture",
      updated: "3 mins ago"
    },
    {
      id: 2,
      image: "https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/648e09b3-6eb3-40e2-aed0-f2b7d586ee37/vlod-3-1.jpg?format=2500w",
      title: "Osun-Osogbo Festival - A Celebration of the River Goddess",
      author: "Bamigbade Mercy",
      category: "Tradition",
      updated: "1 hour ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1696586904914-075bb15acc40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D",
      title: "A wooden stature of a person sitting on a chair",
      author: "Onifade Joshua",
      category: "Art",
      updated: "2 days ago"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1719169395872-3b953620f1ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D",
      title: "Bridal Elegance: A Portrait of Tradition",
      author: "Sonika Agarwal",
      category: "Art",
      updated: "1 week ago"
    },
    {
      id: 5,
      image: "https://plus.unsplash.com/premium_photo-1719864933065-6639a2d32e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2N1bHB0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "An Ode To Heritage",
      author: "Sofia Chen",
      category: "Art",
      updated: "2 weeks ago"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1579762715459-5a068c289fda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50aW5nc3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Brides of the World",
      author: "OverlyOlu",
      category: "Art",
      updated: "3 weeks ago"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1560285428-b7facb9c0041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1bHR1cmFsJTIwZGl2ZXJzaXR5fGVufDB8fDB8fHww",
      title: "The Art of Culture",
      author: "Chen Lee",
      category: "Culture",
      updated: "1 month ago"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Keeping Culture Alive",
      author: "Sonika Agarwal",
      category: "Culture",
      updated: "3 month ago"
    },
    {
      id: 9,
      image: "https://plus.unsplash.com/premium_photo-1679692887401-d4ad08cfeebe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGl0aW9ufGVufDB8fDB8fHww",
      title: "Tribal Mark",
      author: "Felix Olusola",
      category: "Culture",
      updated: "1 month ago"
    },
  ];

  return (
    <div className="container-fluid px-3 px-md-4 px-lg-5 py-4 py-md-5">

      {/* Header Section */}
      <div className='d-flex flex-column align-items-center text-center mb-5'>
        <div className="mb-4">
          <img
            src="https://images.unsplash.com/vector-1738925652934-16f6a3478666?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
            alt="Artistic pattern"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '300px', height: '100px' }}
          />
        </div>

        <h1 className="fw-bold display-4 mb-3">Crafted Voices</h1>
        <h2 className="text-muted mb-4">Celebrating Global Artistic Heritage</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <p className='font-monospace text-center text-muted'>
              Explore the rich tapestry of human creativity across continents and centuries
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cards.map((card) => (
          <div key={card.id} className="col">
            <div className="card border-0 shadow-lg h-100 hover-effect">
              <div className="position-relative overflow-hidden rounded-top" style={{ height: '450px' }}>
                <img
                  src={card.image}
                  className="card-img-top h-100 w-100"
                  alt={card.title}
                  style={{ objectFit: 'cover' }}
                />

                {/* Author Badge */}
                <div className="position-absolute bottom-0 start-0 m-3">
                  <div className="d-flex align-items-center">
                    <div className="bg-white rounded-circle p-2 me-2 shadow-sm">
                      <i className="fas fa-camera text-dark"></i>
                    </div>
                    <span className="text-white small fw-medium">{card.author}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-dark bg-opacity-75 px-3 py-2">{card.category}</span>
                </div>
              </div>

              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="flex-grow-1">
                    <h5 className="card-title fw-medium mb-1">{card.title}</h5>
                  </div>
                  <button className="btn btn-link text-dark p-0 ms-2">
                    <i className="fa-regular fa-heart fa-lg"></i>
                  </button>
                </div>

                {/* Card Footer */}
                <div className="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
                  <small className="text-muted">
                    <i className="fas fa-history me-1"></i>
                    Updated {card.updated}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;