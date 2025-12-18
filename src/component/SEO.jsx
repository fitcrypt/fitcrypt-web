import PropTypes from 'prop-types';

export default function SEO({ 
  title, 
  description, 
  keywords,
  name = 'FitCrypt', 
  type = 'website',
  image = 'https://fitcrypt.app/og-image.jpg',
  url = 'https://fitcrypt.app'
}) {
  return (
    <>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@fitcrypt" />
      <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string
};
