import React from "react";

const feature_content = [
  {
    id: 1,
    icon: "fi fi-rr-paper-plane",
    title: "Online Courses",
    des: "We are committed to shaping the future of education by offering a diverse range of online courses that cater to your unique learning needs and aspirations. ",
  },
  {
    id: 2,
    icon: "fi fi-rr-user",
    title: "Expert Trainer",
    des: "We are committed to shaping the future of education by offering a diverse range of online courses that cater to your unique learning needs and aspirations.",
  },

  {
    id: 3,
    icon: "fi fi-rr-document",
    title: "Get Certificate",
    des: "We are pleased to offer a comprehensive range of courses and programs that provide you with the opportunity to earn certificates, a testament to your expertise and dedication.",
  },
  {
    id: 4,
    icon: "fi fi-rr-calendar",
    title: "Life Time Access",
    des: "We offer is Lifetime Access to our educational content, ensuring that you can continue to evolve and thrive throughout your life.",
  },
];



const FeatureArea = () => {
  return (
    <>
      <section
        className="tp-feature-area grey-bg pt-115 pb-90 pl-205 pr-205 bg-bottom"
        style={{ backgroundImage: `url(/assets/img/bg/shape-bg-1.png)` }}
      >
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="section-title mb-60">
                <span className="tp-sub-title mb-20">What We Offer</span>
                <h2 className="tp-section-title">For Your Future Learning.</h2>
              </div>
            </div>
          </div>
          <div className="tp-feature-cn">
            <div className="row">
              {feature_content.map((item) => (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                  <div
                    className="tpfea mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay=".6s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-20">{item.title}</h5>
                      <p>
                        {item.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
