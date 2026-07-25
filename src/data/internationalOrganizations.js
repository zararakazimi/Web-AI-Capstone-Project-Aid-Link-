const internationalOrganizations = [
  {
    id: 51,
    name: "Médecins Sans Frontières (MSF)",
    categories: ["Healthcare", "Emergency Relief", "Medical Assistance"],
    location: "Geneva, Switzerland",
    description: "Provides emergency medical care to people affected by conflict, disasters, epidemics, and exclusion from healthcare.",
    website: "https://www.msf.org",
    services: ["Healthcare", "Emergency Relief", "Medical Assistance"]
  },
  {
    id: 52,
    name: "CARE International",
    categories: ["Healthcare", "Education", "Women's Empowerment"],
    location: "Geneva, Switzerland",
    description: "Fights poverty and provides humanitarian assistance through health, education, food security, and emergency response.",
    website: "https://www.care-international.org",
    services: ["Healthcare", "Education", "Women's Empowerment"]
  },
  {
    id: 53,
    name: "Oxfam International",
    categories: ["Food Assistance", "Water & Sanitation", "Emergency Relief"],
    location: "Nairobi, Kenya",
    description: "Works worldwide to reduce poverty, provide clean water, emergency relief, and support sustainable development.",
    website: "https://www.oxfam.org",
    services: ["Food Assistance", "Water & Sanitation", "Emergency Relief"]
  },
  {
    id: 54,
    name: "Save the Children International",
    categories: ["Education", "Healthcare", "Child Protection"],
    location: "London, United Kingdom",
    description: "Improves the lives of children through education, healthcare, nutrition, and protection programs.",
    website: "https://www.savethechildren.net",
    services: ["Education", "Healthcare", "Child Protection"]
  },
  {
    id: 55,
    name: "Mercy Corps",
    categories: ["Emergency Relief", "Livelihood", "Food Assistance"],
    location: "Portland, Oregon, USA",
    description: "Provides disaster response, economic development, food security, and humanitarian assistance.",
    website: "https://www.mercycorps.org",
    services: ["Emergency Relief", "Livelihood", "Food Assistance"]
  },
  {
    id: 56,
    name: "World Vision International",
    categories: ["Child Protection", "Education", "Emergency Relief"],
    location: "London, United Kingdom",
    description: "Supports vulnerable children and families through humanitarian aid, education, and child protection.",
    website: "https://www.wvi.org",
    services: ["Child Protection", "Education", "Emergency Relief"]
  },
  {
    id: 57,
    name: "Action Against Hunger (ACF)",
    categories: ["Nutrition", "Food Assistance", "Healthcare"],
    location: "Paris, France",
    description: "Works to end hunger through nutrition, healthcare, food security, and water programs.",
    website: "https://www.actionagainsthunger.org",
    services: ["Nutrition", "Food Assistance", "Healthcare"]
  },
  {
    id: 58,
    name: "Norwegian Refugee Council (NRC)",
    categories: ["Refugee Assistance", "Shelter", "Education"],
    location: "Oslo, Norway",
    description: "Protects displaced people by providing shelter, education, legal assistance, and emergency support.",
    website: "https://www.nrc.no",
    services: ["Refugee Assistance", "Shelter", "Education"]
  },
  {
    id: 59,
    name: "Danish Refugee Council (DRC)",
    categories: ["Refugee Assistance", "Shelter", "Livelihood"],
    location: "Copenhagen, Denmark",
    description: "Provides protection, shelter, humanitarian aid, and livelihood support for displaced communities.",
    website: "https://www.drc.ngo",
    services: ["Refugee Assistance", "Shelter", "Livelihood"]
  },
  {
    id: 60,
    name: "Catholic Relief Services (CRS)",
    categories: ["Healthcare", "Education", "Emergency Relief"],
    location: "Baltimore, Maryland, USA",
    description: "Provides humanitarian assistance, education, agriculture, and disaster response in over 100 countries.",
    website: "https://www.crs.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  }, 

    {
    id: 61,
    name: "Concern Worldwide",
    categories: ["Food Assistance", "Healthcare", "Livelihood"],
    location: "Dublin, Ireland",
    description: "Works to end extreme poverty through emergency response, healthcare, education, and livelihood programs.",
    website: "https://www.concern.net",
    services: ["Food Assistance", "Healthcare", "Livelihood"]
  },
  {
    id: 62,
    name: "Relief International",
    categories: ["Healthcare", "Education", "Emergency Relief"],
    location: "Washington, D.C., USA",
    description: "Provides humanitarian assistance, healthcare, education, and disaster response in vulnerable communities.",
    website: "https://www.ri.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  },
  {
    id: 63,
    name: "Humanity & Inclusion (HI)",
    categories: ["Disability Support", "Healthcare", "Emergency Relief"],
    location: "Lyon, France",
    description: "Supports people with disabilities through rehabilitation, inclusion, and humanitarian assistance.",
    website: "https://www.hi.org",
    services: ["Disability Support", "Healthcare", "Emergency Relief"]
  },
  {
    id: 64,
    name: "International Medical Corps (IMC)",
    categories: ["Healthcare", "Emergency Relief", "Mental Health"],
    location: "Los Angeles, California, USA",
    description: "Delivers emergency medical services, healthcare, and mental health support worldwide.",
    website: "https://internationalmedicalcorps.org",
    services: ["Healthcare", "Emergency Relief", "Mental Health"]
  },
  {
    id: 65,
    name: "Islamic Relief Worldwide",
    categories: ["Food Assistance", "Healthcare", "Emergency Relief"],
    location: "Birmingham, United Kingdom",
    description: "Provides humanitarian aid, emergency relief, education, and healthcare programs worldwide.",
    website: "https://www.islamic-relief.org",
    services: ["Food Assistance", "Healthcare", "Emergency Relief"]
  },
  {
    id: 66,
    name: "Plan International",
    categories: ["Education", "Child Protection", "Women's Empowerment"],
    location: "Woking, United Kingdom",
    description: "Advances children's rights and equality for girls through education and protection programs.",
    website: "https://plan-international.org",
    services: ["Education", "Child Protection", "Women's Empowerment"]
  },
  {
    id: 67,
    name: "SOS Children's Villages International",
    categories: ["Child Protection", "Education", "Family Support"],
    location: "Innsbruck, Austria",
    description: "Supports children without parental care through family strengthening, education, and protection.",
    website: "https://www.sos-childrensvillages.org",
    services: ["Child Protection", "Education", "Family Support"]
  },
  {
    id: 68,
    name: "BRAC International",
    categories: ["Education", "Women's Empowerment", "Livelihood"],
    location: "Dhaka, Bangladesh",
    description: "Improves lives through education, financial inclusion, livelihoods, and community development.",
    website: "https://www.bracinternational.org",
    services: ["Education", "Women's Empowerment", "Livelihood"]
  },
  {
    id: 69,
    name: "Habitat for Humanity International",
    categories: ["Shelter", "Community Development", "Disaster Recovery"],
    location: "Atlanta, Georgia, USA",
    description: "Builds safe, affordable housing and helps families recover after disasters.",
    website: "https://www.habitat.org",
    services: ["Shelter", "Community Development", "Disaster Recovery"]
  },
  {
    id: 70,
    name: "WaterAid",
    categories: ["Water & Sanitation", "Healthcare", "Community Development"],
    location: "London, United Kingdom",
    description: "Provides clean water, sanitation, hygiene education, and sustainable water solutions.",
    website: "https://www.wateraid.org",
    services: ["Water & Sanitation", "Healthcare", "Community Development"]
  },

    {
    id: 71,
    name: "Tearfund",
    categories: ["Emergency Relief", "Livelihood", "Community Development"],
    location: "Teddington, United Kingdom",
    description: "Works with local partners to respond to disasters, reduce poverty, and strengthen communities.",
    website: "https://www.tearfund.org",
    services: ["Emergency Relief", "Livelihood", "Community Development"]
  },
  {
    id: 72,
    name: "Adventist Development and Relief Agency (ADRA)",
    categories: ["Healthcare", "Education", "Emergency Relief"],
    location: "Silver Spring, Maryland, USA",
    description: "Provides disaster relief, healthcare, education, and sustainable development programs worldwide.",
    website: "https://adra.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  },
  {
    id: 73,
    name: "People In Need (PIN)",
    categories: ["Education", "Emergency Relief", "Livelihood"],
    location: "Prague, Czech Republic",
    description: "Supports education, humanitarian response, human rights, and sustainable livelihoods.",
    website: "https://www.peopleinneed.net",
    services: ["Education", "Emergency Relief", "Livelihood"]
  },
  {
    id: 74,
    name: "Solidarités International",
    categories: ["Water & Sanitation", "Emergency Relief", "Food Assistance"],
    location: "Clichy, France",
    description: "Provides clean water, sanitation, food security, and emergency humanitarian assistance.",
    website: "https://www.solidarites.org",
    services: ["Water & Sanitation", "Emergency Relief", "Food Assistance"]
  },
  {
    id: 75,
    name: "Première Urgence Internationale (PUI)",
    categories: ["Healthcare", "Food Assistance", "Emergency Relief"],
    location: "Paris, France",
    description: "Provides healthcare, nutrition, food security, and emergency assistance to vulnerable communities.",
    website: "https://www.pu-ami.org",
    services: ["Healthcare", "Food Assistance", "Emergency Relief"]
  },
  {
    id: 76,
    name: "Direct Relief",
    categories: ["Healthcare", "Medical Assistance", "Emergency Relief"],
    location: "California, USA",
    description: "Delivers medicines, medical supplies, and emergency health assistance worldwide.",
    website: "https://www.directrelief.org",
    services: ["Healthcare", "Medical Assistance", "Emergency Relief"]
  },
  {
    id: 77,
    name: "Project HOPE",
    categories: ["Healthcare", "Emergency Relief", "Medical Training"],
    location: "Virginia, USA",
    description: "Improves global health through emergency response, medical training, and disease prevention.",
    website: "https://www.projecthope.org",
    services: ["Healthcare", "Emergency Relief", "Medical Training"]
  },
  {
    id: 78,
    name: "Medair",
    categories: ["Healthcare", "Shelter", "Emergency Relief"],
    location: "Lausanne, Switzerland",
    description: "Provides emergency healthcare, shelter, and humanitarian assistance during crises.",
    website: "https://www.medair.org",
    services: ["Healthcare", "Shelter", "Emergency Relief"]
  },
  {
    id: 79,
    name: "INTERSOS",
    categories: ["Healthcare", "Protection", "Emergency Relief"],
    location: "Rome, Italy",
    description: "Provides humanitarian assistance, healthcare, and protection services for vulnerable people.",
    website: "https://www.intersos.org",
    services: ["Healthcare", "Protection", "Emergency Relief"]
  },
  {
    id: 80,
    name: "GOAL Global",
    categories: ["Food Assistance", "Healthcare", "Emergency Relief"],
    location: "Dublin, Ireland",
    description: "Responds to humanitarian crises through food security, healthcare, and resilience programs.",
    website: "https://www.goalglobal.org",
    services: ["Food Assistance", "Healthcare", "Emergency Relief"]
  },

    {
    id: 81,
    name: "HelpAge International",
    categories: ["Elderly Support", "Healthcare", "Emergency Relief"],
    location: "London, United Kingdom",
    description: "Supports older people through healthcare, humanitarian response, and social protection programs.",
    website: "https://www.helpage.org",
    services: ["Elderly Support", "Healthcare", "Emergency Relief"]
  },
  {
    id: 82,
    name: "CBM Christian Blind Mission",
    categories: ["Disability Support", "Healthcare", "Education"],
    location: "Bensheim, Germany",
    description: "Improves the quality of life of people with disabilities through healthcare, education, and inclusion.",
    website: "https://www.cbm.org",
    services: ["Disability Support", "Healthcare", "Education"]
  },
  {
    id: 83,
    name: "Caritas Internationalis",
    categories: ["Emergency Relief", "Food Assistance", "Healthcare"],
    location: "Vatican City",
    description: "Provides humanitarian assistance, disaster relief, healthcare, and poverty reduction worldwide.",
    website: "https://www.caritas.org",
    services: ["Emergency Relief", "Food Assistance", "Healthcare"]
  },
  {
    id: 84,
    name: "Lutheran World Relief (LWR)",
    categories: ["Agriculture", "Emergency Relief", "Livelihood"],
    location: "Baltimore, Maryland, USA",
    description: "Supports communities through agriculture, emergency response, and economic development.",
    website: "https://www.lwr.org",
    services: ["Agriculture", "Emergency Relief", "Livelihood"]
  },
  {
    id: 85,
    name: "Samaritan's Purse",
    categories: ["Emergency Relief", "Healthcare", "Shelter"],
    location: "Boone, North Carolina, USA",
    description: "Provides emergency relief, medical care, shelter, and disaster response worldwide.",
    website: "https://www.samaritanspurse.org",
    services: ["Emergency Relief", "Healthcare", "Shelter"]
  },
  {
    id: 86,
    name: "Operation Smile",
    categories: ["Healthcare", "Medical Assistance", "Child Care"],
    location: "Virginia Beach, Virginia, USA",
    description: "Provides free cleft lip and palate surgeries and medical care for children worldwide.",
    website: "https://www.operationsmile.org",
    services: ["Healthcare", "Medical Assistance", "Child Care"]
  },
  {
    id: 87,
    name: "Mercy Ships",
    categories: ["Healthcare", "Surgery", "Medical Training"],
    location: "Lausanne, Switzerland",
    description: "Operates hospital ships providing free surgeries and healthcare in developing countries.",
    website: "https://www.mercyships.org",
    services: ["Healthcare", "Surgery", "Medical Training"]
  },
  {
    id: 88,
    name: "Orbis International",
    categories: ["Eye Care", "Healthcare", "Medical Training"],
    location: "New York, USA",
    description: "Prevents blindness through eye care, surgeries, and medical training programs.",
    website: "https://www.orbis.org",
    services: ["Eye Care", "Healthcare", "Medical Training"]
  },
  {
    id: 89,
    name: "ChildFund International",
    categories: ["Education", "Child Protection", "Healthcare"],
    location: "Richmond, Virginia, USA",
    description: "Supports children through education, health, nutrition, and child protection programs.",
    website: "https://www.childfund.org",
    services: ["Education", "Child Protection", "Healthcare"]
  },
  {
    id: 90,
    name: "Heifer International",
    categories: ["Agriculture", "Livelihood", "Food Assistance"],
    location: "Little Rock, Arkansas, USA",
    description: "Helps families overcome poverty through agriculture, livestock, and sustainable livelihoods.",
    website: "https://www.heifer.org",
    services: ["Agriculture", "Livelihood", "Food Assistance"]
  },

    {
    id: 91,
    name: "International Planned Parenthood Federation (IPPF)",
    categories: ["Healthcare", "Family Planning", "Women's Health"],
    location: "London, United Kingdom",
    description: "Provides sexual and reproductive healthcare, family planning, and women's health services worldwide.",
    website: "https://www.ippf.org",
    services: ["Healthcare", "Family Planning", "Women's Health"]
  },
  {
    id: 92,
    name: "Search for Common Ground",
    categories: ["Peacebuilding", "Conflict Resolution", "Community Development"],
    location: "Washington, D.C., USA",
    description: "Promotes peace, dialogue, and conflict resolution in communities affected by violence.",
    website: "https://www.sfcg.org",
    services: ["Peacebuilding", "Conflict Resolution", "Community Development"]
  },
  {
    id: 93,
    name: "Global Communities",
    categories: ["Community Development", "Livelihood", "Emergency Relief"],
    location: "Silver Spring, Maryland, USA",
    description: "Improves lives through humanitarian assistance, economic development, and community resilience.",
    website: "https://globalcommunities.org",
    services: ["Community Development", "Livelihood", "Emergency Relief"]
  },
  {
    id: 94,
    name: "Winrock International",
    categories: ["Agriculture", "Environment", "Economic Development"],
    location: "Little Rock, Arkansas, USA",
    description: "Promotes sustainable agriculture, environmental protection, and economic opportunity worldwide.",
    website: "https://winrock.org",
    services: ["Agriculture", "Environment", "Economic Development"]
  },
  {
    id: 95,
    name: "Humanity First",
    categories: ["Healthcare", "Education", "Emergency Relief"],
    location: "London, United Kingdom",
    description: "Provides disaster relief, healthcare, education, and clean water projects worldwide.",
    website: "https://humanityfirst.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  },
  {
    id: 96,
    name: "The HALO Trust",
    categories: ["Mine Action", "Community Safety", "Humanitarian Assistance"],
    location: "Dumfries, Scotland",
    description: "Clears landmines and explosive remnants of war to make communities safe.",
    website: "https://www.halotrust.org",
    services: ["Mine Action", "Community Safety", "Humanitarian Assistance"]
  },
  {
    id: 97,
    name: "Terre des Hommes",
    categories: ["Child Protection", "Healthcare", "Education"],
    location: "Lausanne, Switzerland",
    description: "Protects children's rights through healthcare, education, and humanitarian assistance.",
    website: "https://www.tdh.org",
    services: ["Child Protection", "Healthcare", "Education"]
  },
  {
    id: 98,
    name: "Johanniter International Assistance",
    categories: ["Healthcare", "Emergency Relief", "Disaster Response"],
    location: "Berlin, Germany",
    description: "Provides emergency medical care, disaster response, and humanitarian assistance worldwide.",
    website: "https://www.johanniter.org",
    services: ["Healthcare", "Emergency Relief", "Disaster Response"]
  },
  {
    id: 99,
    name: "CARE USA",
    categories: ["Healthcare", "Education", "Women's Empowerment"],
    location: "Atlanta, Georgia, USA",
    description: "Works to save lives, defeat poverty, and achieve social justice through humanitarian and development programs.",
    website: "https://www.care.org",
    services: ["Healthcare", "Education", "Women's Empowerment"]
  },
  {
    id: 100,
    name: "Friends of the Earth International",
    categories: ["Environment", "Climate Action", "Community Development"],
    location: "Amsterdam, Netherlands",
    description: "Promotes environmental protection, climate justice, and sustainable development through global advocacy.",
    website: "https://www.foei.org",
    services: ["Environment", "Climate Action", "Community Development"]
  }
];

export default internationalOrganizations;