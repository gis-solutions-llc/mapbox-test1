const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiZ2lzc29sdXRpb25zbGxjbWFwcyIsImEiOiJjamxpMzk4OWcwOWJuM2tvMnBoMXV3OXFqIn0.LCDlwzOBg3XXOiWWHf7Xgw",
  CSV: "/NewPoints",
  center: [-120.234, 47.398],
  zoom: 6,
  title: "Mapbox Test1",
  description:
    "This is a sample map",
  sideBarInfo: ["Location_Name", "Address", "Phone"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Languages supported: ",
      columnHeader: "Languages",
      listItems: [
        "Amharic",
        "ASL",
        "Cambodian",
        "Chinese",
        "Danish",
        "English",
        "French",
        "German",
        "Greek",
        "Hindi",
        "Italian",
        "Japanese",
        "Korean",
        "Language Line Services",
        "Norwegian",
        "Oriya",
        "Portuguese",
        "Punjabi",
        "Russian",
        "Somali",
        "Spanish",
        "Swedish",
        "Tagalog",
        "Thai",
        "Tigrinya",
        "Tongan",
        "Vietnamese",
        "Ukranian",
      ],
    },
    {
      type: "checkbox",
      title: "Devices available: ",
      columnHeader: "Devices_available", // Case sensitive - must match spreadsheet entry
      listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Clients: ",
      columnHeader: "Clients",
      listItems: [
        "Adults",
        "Disabled",
        "Homeless",
        "Immigrants/Refugees",
        "Low Income",
        "Seniors",
        "Youth: Pre-teen",
        "Youth: Teen",
      ],
    },
  ],
};
