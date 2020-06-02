import React from "react";
import './index.css';

const bannerStyle = (bgColor) => ({
  backgroundColor: `${bgColor}`
})

const wrapperStyle = (wrapperBgColor, contentPadding, reverse) => ({
  backgroundColor: `${wrapperBgColor}`,
  flexDirection: !reverse ? 'row' : 'row-reverse',
  margin: `${contentPadding} auto`
})

const headerStyle = (headerColor) => ({
  color: `${headerColor}`
})


export class Section extends React.Component {
  sanitizeString(string) {
    return !string || string.includes('</script>') || string.includes('onload=') || string.includes('onerror=')
      ? ''
      : string
  }

  render() {
    const {bgColor__limio_color, wrapperBgColor__limio_color, contentPadding, header, headerColor__limio_color, reverse} = this.props

    return (
      <div className="Section" style={bannerStyle(bgColor__limio_color)}>
        <div className="SectionWrapper" style={wrapperStyle(wrapperBgColor__limio_color, contentPadding, reverse)}>
         
                    <h2 className="Header" style={headerStyle(headerColor__limio_color)}>{header}</h2>
            
          </div>
        </div>
     )
  }

  static defaultProps = {
    bgColor__limio_color: '#FFFFFF',
    // wrapperBgColor__limio_color: '#000000',
    contentPadding: '2em',
    reverse: false
  };

}

export default Section;