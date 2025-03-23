import React from 'react'
import { Typography } from '@mui/material'
export const MUITypography = () => {
  return (
    <div>
                    {/* Heading Variants */}
            {/* To specify the variant, we use variant prop */}
            {/* For headings variant ranges from h1 to h6 */}
        <Typography variant='h1' >
            H1 Heading
        </Typography>
        <Typography variant='h2' >
            H2 Heading
        </Typography>
        <Typography variant='h3' >
            H3 Heading
        </Typography>
        <Typography variant='h4' >
            H4 Heading
        </Typography>
        <Typography variant='h5' >
            H5 Heading
        </Typography>
        <Typography variant='h6' >
            H6 Heading
        </Typography>
        {/* There  are two more variants of h6 tag. They are subtitle1 and subtitle2. */}
        {/* Here to the element, we can provide the variant as h6. But when you inspect the element, you can see that it is h6 element only. */}
        <Typography variant='subtitle1' >
            Subtitle - 1
        </Typography>
        <Typography variant='subtitle2' >
            Subtitle - 2
        </Typography>
        {/* The final two variants are related to body.  */}
        {/* If you paragraph of text which you need to display, you can make use of body1 and body2 as variants. */}
        <Typography variant='body1' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dignissimos facere necessitatibus quos voluptates blanditiis magnam velit id obcaecati? Distinctio animi ducimus sed laboriosam hic nesciunt vitae vero totam maiores?
        </Typography>
        <Typography variant='body2' >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ratione quos exercitationem illum reiciendis sed et, quis, deleniti aperiam hic asperiores minima, dignissimos iure error necessitatibus voluptatum repellat consequatur quidem?
        </Typography>
    </div>
  )
}
