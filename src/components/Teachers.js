import React from 'react';
import '../css/teacher.css';

const Teachers = () => {
  return (
    <section id="pricing" className="bg-light mt-10">
      <div className="container-lg">
        <div className="text-center">
          <h2>List of teachers</h2>
          <p className="lead text-muted">Look at these teachers</p>
        </div>

        <div className="row my-5 g-0 align-items-start align-items-md-center justify-content-center d-flex">
          <div className="col-8 col-lg-3 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Ziba El Bsir</h4>
                <div alt="Ziba El Bsir" className="img" />
                <a href="/specialiste" className="btn btn-outline-primary btn-lg mt-3">
                  More...
                </a>
              </div>
            </div>
          </div>

          <div className="col-8 col-lg-3 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Ziba El Bsir</h4>
                <div alt="Ziba El Bsir" className="img" />
                <a href="/specialiste" className="btn btn-outline-primary btn-lg mt-3">
                  More...
                </a>
              </div>
            </div>
          </div>

          

          <div className="col-8 col-lg-3 col-xl-3">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h4 className="card-title">Ziba El Bsir</h4>
                <div alt="Ziba El Bsir" className="img" />
                <a href="/specialiste" className="btn btn-outline-primary btn-lg mt-3">
                  More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
