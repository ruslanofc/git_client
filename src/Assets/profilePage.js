const profilePageStyle = {
  
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "35 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "0 auto",
    width: "70%",
    color: "#999",
    textAlign: "center !important"
  },
  page: {
    maxwidth: '600px',
    maxheight: '600px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    minWidth: "70vw",
    zIndex: "1",
    marginTop: "40px",
    minHeight: "600px"
  },
  mainRaised: {
    margin: "60px  30px 0px",
    borderRadius: "3px",
    boxShadow:
       "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",

    textAlign: "center",
  },
  avatar: {
    marginTop: '150px',
    borderRadius: "3%"
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    display: "inline-block",
    position: "relative",
    marginTop: "-100px",
    minHeight: "32px",
    textDecoration: "none"
  },
  url: {
    marginTop: "-10px",
    display: "center",
    position: "relative",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  moreButton: {
    margin: 16,
  },
  buttons: {
    marginTop:'-80px',
    display: 'flex',
    justifyContent: "center",
  },
  extended: {
    color: 'black'
  }
};

export default profilePageStyle;
