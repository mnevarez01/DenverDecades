import React from "react";
import './index.css';

const bannerStyle = (bannerImg) => ({
  backgroundImage: `url(${bannerImg})`
})

const overlayStyle = (overlayOpacity) => ({
  background: `rgba(0, 0, 0, ${overlayOpacity})`
})

const headlineStyle = (color, fontSize) => ({ 
  color,
  fontSize
})

const sublineStyle = (color, fontSize) => ({
  color,
  fontSize
})

export class HeroBanner extends React.Component {
  render() {
    const {
      heroImage,
      headline,
      headlineColor__limio_color,
      headlineFontSize,
      subline,
      sublineColor__limio_color,
      sublineFontSize,
      textPosition,
      overlayOpacity
    } = this.props

    return (
      <div className="HeroBanner" style={bannerStyle(heroImage)}>
        <div className="HeroOverlay" style={overlayStyle(overlayOpacity)}></div>
        <div className={`HeroWrapper ${textPosition.selected.id === "Center" ? " isCenter" : ""}`}>
          <div className={`${textPosition.selected.id}Text`}>
            <h1 style={headlineStyle(headlineColor__limio_color, headlineFontSize)}>{headline}</h1>
            <h2 style={sublineStyle(sublineColor__limio_color, sublineFontSize)}>{subline}</h2>
          </div>
        </div>
      </div>
    )
  }

  static defaultProps = {
    heroImage: "https://i.imgur.com/7Tgl5iq.jpg?2",
    headline: "DISCOVER OUR HISTORY",
    headlineColor__limio_color: "#FFFFFF",
    headlineFontSize: '3em',
    subline: "Denver starts here",
    sublineColor__limio_color: "#FFFFFF",
    sublineFontSize: '2em',
    textPosition: {
      options: [
        {label: "TopLeft", id: "TopLeft"},
        {label: "Left", id: "Left"},
        {label: "BottomLeft", id: "BottomLeft"},
        {label: "TopRight", id: "TopRight"},
        {label: "Right", id: "Right"},
        {label: "BottomRight", id: "BottomRight"},
        {label: "TopCenter", id: "TopCenter"},
        {label: "Center", id: "Center"},
        {label: "BottomCenter", id: "BottomCenter"},
      ],
      selected: {label: "TopLeft", id: "TopLeft"}
    },
    overlayOpacity: "0.2"
  };

}

export default HeroBanner;