const afghanistanOrganizations = [
  {
    id: 1,
    name: "Afghan Red Crescent Society (ARCS)",
    categories: ["Healthcare","Emergency Relief","Disaster Response"],
    location: "Kabul, Afghanistan",
    description: "Provides emergency medical care, disaster response, first aid, blood services and humanitarian assistance.",
    website: "https://arcs.af",
    services: ["Healthcare","Emergency Relief","First Aid","Disaster Response"]
  },
  {
    id: 2,
    name: "World Food Programme (WFP)",
    categories: ["Food Assistance","Nutrition","Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides emergency food assistance, nutrition support and livelihood programs.",
    website: "https://www.wfp.org",
    services: ["Food Assistance","Nutrition","Cash Assistance"]
  },
  {
    id: 3,
    name: "United Nations Children's Fund (UNICEF)",
    categories: ["Education","Healthcare","Child Protection","Water & Sanitation"],
    location: "Kabul, Afghanistan",
    description: "Supports children through education, healthcare, nutrition and protection services.",
    website: "https://www.unicef.org",
    services: ["Education","Healthcare","Child Protection","Water & Sanitation"]
  },
  {
    id: 4,
    name: "United Nations High Commissioner for Refugees (UNHCR)",
    categories: ["Refugee Assistance","Shelter","Protection"],
    location: "Kabul, Afghanistan",
    description: "Protects refugees, returnees and displaced families through shelter and legal assistance.",
    website: "https://www.unhcr.org",
    services: ["Shelter","Protection","Emergency Relief"]
  },
  {
    id: 5,
    name: "World Health Organization (WHO)",
    categories: ["Healthcare","Disease Prevention","Emergency Health"],
    location: "Kabul, Afghanistan",
    description: "Strengthens healthcare systems and provides emergency health support.",
    website: "https://www.who.int",
    services: ["Healthcare","Disease Prevention","Medical Support"]
  },
  {
    id: 6,
    name: "International Organization for Migration (IOM)",
    categories: ["Migration","Shelter","Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides migration assistance, shelter and humanitarian support.",
    website: "https://www.iom.int",
    services: ["Migration","Shelter","Emergency Relief"]
  },
  {
    id: 7,
    name: "Food and Agriculture Organization (FAO)",
    categories: ["Agriculture","Food Assistance","Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Supports agriculture, food security and rural livelihoods.",
    website: "https://www.fao.org",
    services: ["Agriculture","Food Security","Livelihood"]
  },
  {
    id: 8,
    name: "CARE Afghanistan",
    categories: ["Women Empowerment","Education","Healthcare","Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides humanitarian assistance focusing on women and vulnerable communities.",
    website: "https://www.care.org",
    services: ["Education","Healthcare","Women's Support","Emergency Relief"]
  },
  {
    id: 9,
    name: "Save the Children Afghanistan",
    categories: ["Education","Child Protection","Healthcare"],
    location: "Kabul, Afghanistan",
    description: "Supports children through education, healthcare and protection programs.",
    website: "https://www.savethechildren.org",
    services: ["Education","Child Protection","Healthcare"]
  },
  {
    id: 10,
    name: "International Rescue Committee (IRC)",
    categories: ["Healthcare","Education","Emergency Relief","Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Provides humanitarian assistance, education, healthcare and economic recovery programs.",
    website: "https://www.rescue.org",
    services: ["Healthcare","Education","Livelihood","Emergency Relief"]
  },

    {
    id: 11,
    name: "Norwegian Refugee Council (NRC)",
    categories: ["Shelter", "Education", "Legal Aid"],
    location: "Kabul, Afghanistan",
    description: "Provides shelter, education, legal assistance and emergency relief.",
    website: "https://www.nrc.no",
    services: ["Shelter", "Education", "Legal Aid"]
  },
  {
    id: 12,
    name: "Danish Refugee Council (DRC)",
    categories: ["Refugee Assistance", "Shelter", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Supports displaced families through shelter, protection and livelihoods.",
    website: "https://www.drc.ngo",
    services: ["Shelter", "Livelihood", "Protection"]
  },
  {
    id: 13,
    name: "Action Against Hunger (ACF)",
    categories: ["Nutrition", "Food Assistance", "Healthcare"],
    location: "Kabul, Afghanistan",
    description: "Works to end hunger through nutrition, healthcare and food security.",
    website: "https://www.actionagainsthunger.org",
    services: ["Nutrition", "Food Assistance", "Healthcare"]
  },
  {
    id: 14,
    name: "Mercy Corps",
    categories: ["Livelihood", "Emergency Relief", "Food Assistance"],
    location: "Kabul, Afghanistan",
    description: "Supports communities through humanitarian response and economic recovery.",
    website: "https://www.mercycorps.org",
    services: ["Livelihood", "Emergency Relief", "Food Assistance"]
  },
  {
    id: 15,
    name: "Aga Khan Foundation (AKF)",
    categories: ["Education", "Healthcare", "Agriculture"],
    location: "Kabul, Afghanistan",
    description: "Improves quality of life through education, healthcare and rural development.",
    website: "https://www.akdn.org",
    services: ["Education", "Healthcare", "Agriculture"]
  },
  {
    id: 16,
    name: "DACAAR",
    categories: ["Water & Sanitation", "Agriculture", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Provides water, sanitation, agriculture and rural development programs.",
    website: "https://dacaar.org",
    services: ["Water & Sanitation", "Agriculture", "Livelihood"]
  },
  {
    id: 17,
    name: "Islamic Relief Worldwide",
    categories: ["Food Assistance", "Healthcare", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides humanitarian assistance including food, healthcare and emergency response.",
    website: "https://www.islamic-relief.org",
    services: ["Food Assistance", "Healthcare", "Emergency Relief"]
  },
  {
    id: 18,
    name: "Catholic Relief Services (CRS)",
    categories: ["Agriculture", "Healthcare", "Education"],
    location: "Kabul, Afghanistan",
    description: "Supports vulnerable communities through agriculture, education and healthcare.",
    website: "https://www.crs.org",
    services: ["Agriculture", "Healthcare", "Education"]
  },
  {
    id: 19,
    name: "Concern Worldwide",
    categories: ["Food Assistance", "Livelihood", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Works to reduce poverty through emergency response and livelihood support.",
    website: "https://www.concern.net",
    services: ["Food Assistance", "Livelihood", "Emergency Relief"]
  },
  {
    id: 20,
    name: "Relief International",
    categories: ["Healthcare", "Education", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides healthcare, education and humanitarian assistance to vulnerable communities.",
    website: "https://www.ri.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  },

    {
    id: 21,
    name: "Norwegian Church Aid (NCA)",
    categories: ["Water & Sanitation", "Healthcare", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Supports communities through clean water, sanitation, healthcare and emergency response.",
    website: "https://www.kirkensnodhjelp.no/en",
    services: ["Water & Sanitation", "Healthcare", "Emergency Relief"]
  },
  {
    id: 22,
    name: "Humanity & Inclusion (HI)",
    categories: ["Disability Support", "Healthcare", "Rehabilitation"],
    location: "Kabul, Afghanistan",
    description: "Provides rehabilitation and inclusion services for people with disabilities.",
    website: "https://www.hi.org",
    services: ["Disability Support", "Rehabilitation", "Healthcare"]
  },
  {
    id: 23,
    name: "BRAC Afghanistan",
    categories: ["Education", "Women Empowerment", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Supports education, women's empowerment and sustainable livelihoods.",
    website: "https://www.brac.net",
    services: ["Education", "Women Empowerment", "Livelihood"]
  },
  {
    id: 24,
    name: "Terre des Hommes",
    categories: ["Child Protection", "Education", "Healthcare"],
    location: "Kabul, Afghanistan",
    description: "Promotes child protection, education and healthcare for vulnerable children.",
    website: "https://www.tdh.org",
    services: ["Child Protection", "Education", "Healthcare"]
  },
  {
    id: 25,
    name: "Oxfam Afghanistan",
    categories: ["Food Assistance", "Water & Sanitation", "Women's Empowerment"],
    location: "Kabul, Afghanistan",
    description: "Supports food security, clean water and women's economic empowerment.",
    website: "https://www.oxfam.org",
    services: ["Food Assistance", "Water & Sanitation", "Women's Empowerment"]
  },
  {
    id: 26,
    name: "World Vision Afghanistan",
    categories: ["Child Protection", "Education", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides child-focused humanitarian assistance, education and emergency support.",
    website: "https://www.wvi.org",
    services: ["Child Protection", "Education", "Emergency Relief"]
  },
  {
    id: 27,
    name: "HelpAge International",
    categories: ["Healthcare", "Older People", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Supports older people through healthcare and humanitarian assistance.",
    website: "https://www.helpage.org",
    services: ["Healthcare", "Older People Support", "Emergency Relief"]
  },
  {
    id: 28,
    name: "Plan International",
    categories: ["Education", "Girls Education", "Child Protection"],
    location: "Kabul, Afghanistan",
    description: "Promotes children's rights and girls' education through humanitarian programs.",
    website: "https://plan-international.org",
    services: ["Education", "Girls Education", "Child Protection"]
  },
  {
    id: 29,
    name: "International Medical Corps (IMC)",
    categories: ["Healthcare", "Mental Health", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Provides emergency healthcare, mental health and medical training services.",
    website: "https://internationalmedicalcorps.org",
    services: ["Healthcare", "Mental Health", "Emergency Relief"]
  },
  {
    id: 30,
  name: "ACTED",
  categories: ["Emergency Relief", "Livelihood", "Community Development"],
  location: "Kabul, Afghanistan",
  description: "Provides humanitarian assistance, disaster response, resilience building and sustainable development programs.",
  website: "https://www.acted.org",
  services: [
    "Emergency Relief",
    "Livelihood",
    "Community Development"]
  },

    {
    id: 31,
    name: "Agency Coordinating Body for Afghan Relief and Development (ACBAR)",
    categories: ["Coordination", "Humanitarian Support", "Development"],
    location: "Kabul, Afghanistan",
    description: "Coordinates humanitarian and development organizations operating in Afghanistan.",
    website: "https://www.acbar.org",
    services: ["NGO Coordination", "Humanitarian Support", "Information Sharing"]
  },
  {
    id: 32,
    name: "Afghanaid",
    categories: ["Agriculture", "Education", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Supports rural communities through education, agriculture and livelihood projects.",
    website: "https://www.afghanaid.org.uk",
    services: ["Agriculture", "Education", "Livelihood"]
  },
  {
    id: 33,
    name: "Afghan Women's Network (AWN)",
    categories: ["Women's Empowerment", "Legal Aid", "Education"],
    location: "Kabul, Afghanistan",
    description: "Promotes women's rights, education and legal assistance.",
    website: "https://www.afghanwomennetwork.org",
    services: ["Women's Empowerment", "Legal Aid", "Education"]
  },
  {
    id: 34,
    name: "Coordination of Humanitarian Assistance (CHA)",
    categories: ["Healthcare", "Emergency Relief", "Education"],
    location: "Kabul, Afghanistan",
    description: "Provides healthcare, education and humanitarian assistance.",
    website: "https://www.cha-net.org",
    services: ["Healthcare", "Education", "Emergency Relief"]
  },
  {
    id: 35,
    name: "Swedish Committee for Afghanistan (SCA)",
    categories: ["Healthcare", "Education", "Disability Support"],
    location: "Kabul, Afghanistan",
    description: "Provides education, healthcare and rehabilitation services.",
    website: "https://www.sak.se",
    services: ["Healthcare", "Education", "Disability Support"]
  },
  {
    id: 36,
    name: "Solidarités International",
    categories: ["Water & Sanitation", "Emergency Relief", "Food Assistance"],
    location: "Kabul, Afghanistan",
    description: "Provides clean water, sanitation and emergency humanitarian assistance.",
    website: "https://www.solidarites.org",
    services: ["Water & Sanitation", "Emergency Relief", "Food Assistance"]
  },
  {
    id: 37,
    name: "People In Need (PIN)",
    categories: ["Education", "Livelihood", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Supports education, livelihoods and humanitarian response.",
    website: "https://www.peopleinneed.net",
    services: ["Education", "Livelihood", "Emergency Relief"]
  },
  {
    id: 38,
    name: "International Committee of the Red Cross (ICRC)",
    categories: ["Healthcare", "Emergency Relief", "Protection"],
    location: "Kabul, Afghanistan",
    description: "Provides medical care, protection and humanitarian assistance during conflicts.",
    website: "https://www.icrc.org",
    services: ["Healthcare", "Protection", "Emergency Relief"]
  },
  {
    id: 39,
    name: "The HALO Trust",
    categories: ["Mine Action", "Community Safety", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Clears landmines and explosive remnants of war to protect communities.",
    website: "https://www.halotrust.org",
    services: ["Mine Clearance", "Risk Education", "Community Safety"]
  },
  {
    id: 40,
    name: "Save the Children International",
    categories: ["Education", "Healthcare", "Child Protection"],
    location: "Kabul, Afghanistan",
    description: "Supports children through education, healthcare and emergency response.",
    website: "https://www.savethechildren.net",
    services: ["Education", "Healthcare", "Child Protection"]
  },
  {
    id: 41,
    name: "Emergency",
    categories: ["Healthcare", "Emergency Surgery", "Trauma Care"],
    location: "Kabul, Afghanistan",
    description: "Provides free medical and surgical care to victims of war and poverty.",
    website: "https://en.emergency.it",
    services: ["Healthcare", "Emergency Surgery", "Trauma Care"]
  },
  {
    id: 42,
    name: "HealthNet TPO",
    categories: ["Healthcare", "Mental Health", "Community Health"],
    location: "Kabul, Afghanistan",
    description: "Strengthens healthcare systems and mental health services.",
    website: "https://www.healthnettpo.org",
    services: ["Healthcare", "Mental Health", "Community Health"]
  },
  {
    id: 43,
    name: "Organization for Sustainable Development and Research (OSDR)",
    categories: ["Education", "Research", "Community Development"],
    location: "Kabul, Afghanistan",
    description: "Promotes education, research and sustainable community development.",
    website: "https://osdr.org.af",
    services: ["Education", "Research", "Community Development"]
  },
  {
    id: 44,
    name: "Women for Afghan Women (WAW)",
    categories: ["Women's Empowerment", "Legal Aid", "Protection"],
    location: "Kabul, Afghanistan",
    description: "Supports women and families through legal aid and protection services.",
    website: "https://womenforafghanwomen.org",
    services: ["Women's Empowerment", "Legal Aid", "Protection"]
  },
  {
    id: 45,
    name: "Afghanistan Rehabilitation and Education Program (AREP)",
    categories: ["Education", "Livelihood", "Community Development"],
    location: "Kabul, Afghanistan",
    description: "Supports education and community development initiatives.",
    website: "https://arep.org.af",
    services: ["Education", "Livelihood", "Community Development"]
  },
  {
    id: 46,
    name: "Mission East",
    categories: ["Livelihood", "Agriculture", "Emergency Relief"],
    location: "Kabul, Afghanistan",
    description: "Supports agriculture, livelihoods and humanitarian response.",
    website: "https://missioneast.org",
    services: ["Agriculture", "Livelihood", "Emergency Relief"]
  },
  {
    id: 47,
    name: "CARE for Afghan Families",
    categories: ["Healthcare", "Women Empowerment", "Education"],
    location: "Kabul, Afghanistan",
    description: "Supports vulnerable families through healthcare and education programs.",
    website: "https://care.org",
    services: ["Healthcare", "Women's Empowerment", "Education"]
  },
  {
    id: 48,
    name: "Roots of Peace",
    categories: ["Agriculture", "Mine Action", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Restores agricultural land affected by conflict and supports farmers.",
    website: "https://rootsofpeace.org",
    services: ["Agriculture", "Mine Clearance", "Livelihood"]
  },
  {
    id: 49,
    name: "Aid Gate Organization",
    categories: ["Emergency Relief", "Healthcare", "Food Assistance"],
    location: "Kabul, Afghanistan",
    description: "Provides humanitarian assistance to vulnerable communities.",
    website: "https://aidgate.org",
    services: ["Emergency Relief", "Healthcare", "Food Assistance"]
  },
  {
    id: 50,
    name: "Afghan Aid",
    categories: ["Education", "Healthcare", "Livelihood"],
    location: "Kabul, Afghanistan",
    description: "Supports education, healthcare and rural development across Afghanistan.",
    website: "https://www.afghanaid.org.uk",
    services: ["Education", "Healthcare", "Livelihood"]
  }

];

export default afghanistanOrganizations;