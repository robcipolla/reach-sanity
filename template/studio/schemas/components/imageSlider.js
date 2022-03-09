export default {
    name: "imageSlider",
    title: "Image Slider",
    type: "array",
    options: {
      sortable: true,
      layout: 'grid',
    },
    of: [
        {
            type: 'image',
            name: 'slideImage',
            title: 'Slide Image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt Text',
                }
            ]
        }
    ]
  };
  