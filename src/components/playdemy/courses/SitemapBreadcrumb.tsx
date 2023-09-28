import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function SitemapBreadcrumb({ levels }) {
  if (levels.length !== 3) {
    console.error("You must provide an array with three levels for the sitemap.");
    return null;
  }

  const handleClick = (event, url) => {
    event.preventDefault();
    console.log("You clicked:", url);
    // Add navigation logic here, e.g., using react-router-dom's history.push(url)
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href={levels[0].url} onClick={(e) => handleClick(e, levels[0].url)}>
        {levels[0].name}
      </Link>
      <Link color="inherit" href={levels[1].url} onClick={(e) => handleClick(e, levels[1].url)}>
        {levels[1].name}
      </Link>
      <Typography color="textPrimary">{levels[2].name}</Typography>
    </Breadcrumbs>
  );
}

export default SitemapBreadcrumb;
