export const dishesToInsert: {
  title: string;
  description: string;
  count: string;
  price: number;
  category_id: number;
  image_url: string;
}[] = [
  // Завтраки (category_id = 1)
  {
    title: 'Пражский завтрак',
    description:
      'яичница (из 2-х яиц), тосты, охотничьи колбаски, сыр, специи, фреш салат',
    count: '300 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Яичница из 3-х яиц',
    description: 'с томатами и болгарским перцем',
    count: '200 гр',
    price: 350,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Омлет с беконом',
    description: 'омлет из 2-х яиц, хрустящий бекон, салат из свежих овощей',
    count: '250 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Блины с джемом',
    description: 'блины, джем',
    count: '150/30 гр',
    price: 250,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Блины со сметаной',
    description: 'блины, сметана',
    count: '150/30 гр',
    price: 250,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Блины с бананом и нутеллой',
    description: 'блины, банан, нутелла',
    count: '150/30 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 1,
  },
  {
    title: 'Сырники со сметаной',
    description: 'сырники, сметана',
    count: '150/30 гр',
    price: 350,
    image_url: 'i.webp',
    category_id: 1,
  },

  // Первые блюда (category_id = 2)
  {
    title: 'Том Ям',
    description: '',
    count: '300 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Солянка мясная',
    description:
      'говядина, колбаса с/к, язык говяжий, огурцы соленые, маслины, лимон',
    count: '300/30 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Борщ с говядиной',
    description: '',
    count: '300/30 гр',
    price: 550,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Бульон с лапшой и курицей',
    description: '',
    count: '300/30 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Лагман с говядиной',
    description: '',
    count: '300 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Бульон с пельменями',
    description: '',
    count: '250 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 2,
  },
  {
    title: 'Окрошка на кефире / квасе',
    description: '',
    count: '300 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 2,
  },

  // Холодные закуски (category_id = 3)
  {
    title: 'Овощной букет',
    description: 'ассорти из свежих овощей',
    count: '350 гр',
    price: 550,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Вкусности из погребка',
    description: 'капуста квашеная, маринованные огурцы, томаты маринованные',
    count: '350 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Сырное ассорти «Четыре сыра»',
    description:
      'маасдам, ореховый сыр, сулугуни, российский сыр, орехи, цукаты, мёд',
    count: '200/50 гр',
    price: 900,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Сало с гренками «Дуэт»',
    description:
      'сало соленое, сало с прослойкой, корнишоны маринованные, лук зеленый, гренки, горчица',
    count: '100/100/30 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Тарелка «Мясной пир»',
    description:
      'рулет куриный, язык говяжий, подчеревок запеченный, хрен, горчица',
    count: '210/30/30 гр',
    price: 1000,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Селедочка под водочку',
    description: 'филе сельди, картофель, лук красный, лимон',
    count: '150/100/30 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Рулетики из лосося с крем-сыром',
    description: 'лосось, сыр мягкий, огурец, гренки, лимон',
    count: '150 гр',
    price: 1000,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Семга слабосоленая шеф-посола',
    description: '',
    count: '100/30/20 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Грибы маринованные',
    description: '',
    count: '150 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 3,
  },
  {
    title: 'Маслины/оливки',
    description: '',
    count: '50 гр',
    price: 200,
    image_url: 'i.webp',
    category_id: 3,
  },

  // Салаты (category_id = 4)
  {
    title: 'Хрустящий баклажан',
    description:
      'микс салата, крем-чиз, баклажан, томаты, соус Кунжутный, кунжут',
    count: '220 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат Греческий',
    description:
      'томаты, огурец, перец болгарский, лук ялтинский, сыр Фета, маслины, масло оливковое',
    count: '250 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат овощной с салатной заправкой',
    description:
      'микс салата, огурец свежий, томаты свежие, перец болгарский, лук, зелень, масло растительное',
    count: '250 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Цезарь с курицей',
    description:
      'лист салата айсберг, куриное филе, сыр пармезан, томаты, гренки, соус Цезарь',
    count: '270 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Цезарь с креветкой',
    description:
      'лист салата айсберг, креветка, сыр пармезан, томаты, гренки, соус Цезарь',
    count: '250 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Цезарь с лососем',
    description:
      'лист салата айсберг, лосось с/с, сыр пармезан, томаты, гренки, соус Цезарь',
    count: '250 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Теплый салат Мангольд',
    description:
      'говядина жаренная, перец болгарский, томаты, кунжутный соус, микс салата, кедровый орех, шеф-соус',
    count: '250 гр',
    price: 850,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат с тунцом Нисуаз',
    description:
      'тунец на гриле, яйцо перепелиное, микс салата, фасоль спаржевая, томаты, шеф-соус, кунжут',
    count: '250 гр',
    price: 850,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Теплый салат с морепродуктами',
    description:
      'микс салата, айсберг, кальмар, мидии, креветка, сливки, сыр пармезан, томаты',
    count: '300 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат с манго и креветками',
    description:
      'микс салата, айсберг, манго, креветка, клубника, цитрусовый соус',
    count: '250 гр',
    price: 1000,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат с гребешком и киви',
    description:
      'микс салата, айсберг, черри, апельсин, киви, гребешки, лимон, икра красная (масаго)',
    count: '250 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Салат с жаренным лососем, авокадо и грибами',
    description:
      'микс салата, авокадо, грибы жаренные, лосось, грейпфрут, огурец свежий, фирменный соус',
    count: '250 гр',
    price: 900,
    image_url: 'i.webp',
    category_id: 4,
  },
  {
    title: 'Оливье',
    description:
      'говядина отварная, огурец соленый, яйцо отварное, морковь, картофель, горошек, майонез',
    count: '200 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 4,
  },

  // Горячие закуски (category_id = 5)
  {
    title: 'Мидии Гигант запеченные с сыром Пармезан',
    description: 'мидии киви, пармезан, икра тобико, лимон',
    count: '250 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 5,
  },
  {
    title: 'Мидии Маринара в ракушке',
    description: 'сливки, икра Тобико',
    count: '350/100 гр',
    price: 900,
    image_url: 'i.webp',
    category_id: 5,
  },
  {
    title: 'Мидии тушеные с луком в сливочном соусе',
    description: 'мидии, лук, сливки, лимон',
    count: '220 гр',
    price: 700,
    image_url: 'i.webp',
    category_id: 5,
  },
  {
    title: 'Сотэ из Черноморского рапана',
    description: 'рапан, томаты, лук ялта, перец цветной',
    count: '200 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 5,
  },
  {
    title: 'Лаваш армянский с сыром Моцарелла и зеленью на гриле',
    description: '',
    count: '1 шт',
    price: 450,
    image_url: 'i.webp',
    category_id: 5,
  },

  // Вторые блюда (category_id = 6)
  {
    title: 'Фирменное блюдо',
    description:
      'филе курицы и свинины, завернутое в душистую корейку и обжаренное на гриле. Подается с картофелем каскара и мексиканской смесью',
    count: '200/100/20/20 гр',
    price: 1100,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Сковородка со свининой',
    description: 'свинина, картофель, лук, грибы, соус терияки',
    count: '350 гр',
    price: 850,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Сковородка с говядиной и печенью',
    description: 'говядина, печень, лук, картофель, чеснок, томаты',
    count: '350 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Медальоны с креветкой и креветочным соусом',
    description:
      'говядина, креветка, креветочный соус, масло сливочное, зелень',
    count: '300 гр',
    price: 1400,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Цыпленок Тапака с картофелем',
    description: 'соус чесночный',
    count: '280/80/30 гр',
    price: 1100,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Колбаски куриные Гарибальди /весовое/',
    description:
      'колбаски своего приготовления, подаются с картофелем фри и кетчупом',
    count: '100 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Колбаски свино-говяжьи Баварские /весовое/',
    description:
      'колбаски своего приготовления, подаются с картофельными дольками и кетчупом',
    count: '100 гр',
    price: 450,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Вареники с картофелем',
    description: 'и сливочно-грибным соусом',
    count: '250/100 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Пельмени с курицей',
    description: 'под сметанно-сырным соусом',
    count: '200/50 гр',
    price: 450,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Стейк Чак-ролл',
    description:
      'говядина мраморная, розмарин, чеснок, масло сливочное, подается с перечным соусом и картофелем по-деревенски',
    count: '250/150/30 гр',
    price: 1300,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Стейк Рибай',
    description:
      'мраморная говядина, розмарин, чеснок, сливочное масло, подается с соусом демиглас и овощами гриль',
    count: '300/200/50 гр',
    price: 1800,
    image_url: 'i.webp',
    category_id: 6,
  },
  {
    title: 'Утиная грудка с ягодным соусом',
    description:
      'утиная грудка, ягодный соус, микс салата, запеченный картофель',
    count: '180/100/150 гр',
    price: 1200,
    image_url: 'i.webp',
    category_id: 6,
  },

  // Пасты (category_id = 8)
  {
    title: 'Паста с морепродуктами',
    description: 'фетучини, мидии киви, кальмар, сливки, пармезан',
    count: '300 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 8,
  },
  {
    title: 'Паста с лососем и шпинатом',
    description: 'спагетти, лосось, шпинат, сливки, чеснок, пармезан',
    count: '280 гр',
    price: 700,
    image_url: 'i.webp',
    category_id: 8,
  },
  {
    title: 'Карбонара классическая',
    description: 'спагетти, бекон, яичный желток, пармезан, черный перец',
    count: '300 гр',
    price: 550,
    image_url: 'i.webp',
    category_id: 8,
  },
  {
    title: 'Фетучини Альфредо с курицей',
    description: 'фетучини, куриное филе, сливочный соус, пармезан, зелень',
    count: '320 гр',
    price: 600,
    image_url: 'i.webp',
    category_id: 8,
  },

  // Вторые блюда из морепродуктов (category_id = 7)
  {
    title: 'Креветки тигровые на гриле',
    description: 'креветки тигровые, специи, лимон, соус чесночный',
    count: '150 гр',
    price: 900,
    image_url: 'i.webp',
    category_id: 7,
  },
  {
    title: 'Кальмар на гриле с лимоном',
    description: 'кольца кальмара, специи, лимон, зелень',
    count: '200 гр',
    price: 800,
    image_url: 'i.webp',
    category_id: 7,
  },
  {
    title: 'Сет морепродуктов на двоих',
    description: 'мидии, креветки, кальмар, соус сливочный, лимон',
    count: '400/200/150/50 гр',
    price: 2200,
    image_url: 'i.webp',
    category_id: 7,
  },
  {
    title: 'Филе трески в сливочном соусе',
    description: 'треска, сливки, лук, морковь, специи, подается с рисом',
    count: '200/150 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 7,
  },

  // Бургеры (category_id = 12)
  {
    title: 'Бургер Классический',
    description:
      'котлета из говядины, салат айсберг, томаты, лук, соус бургер, булочка',
    count: '250/100 гр',
    price: 550,
    image_url: 'i.webp',
    category_id: 12,
  },
  {
    title: 'Бургер с курицей и беконом',
    description:
      'куриная котлета, бекон, сыр чеддер, салат, томаты, соус ранч, булочка',
    count: '230/100 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 12,
  },
  {
    title: 'Вегетарианский бургер',
    description: 'овощная котлета, авокадо, томаты, салат, соус песто, булочка',
    count: '220/100 гр',
    price: 450,
    image_url: 'i.webp',
    category_id: 12,
  },
  {
    title: 'Бургер Чизбургер',
    description:
      'говяжья котлета, сыр чеддер, маринованные огурцы, лук, кетчуп, горчица, булочка',
    count: '260/100 гр',
    price: 580,
    image_url: 'i.webp',
    category_id: 12,
  },

  // Мангал (category_id = 13)
  {
    title: 'Шашлык из свинины',
    description: 'свинина, специи, лук маринованный, лаваш, соус аджика',
    count: '200/50/30 гр',
    price: 750,
    image_url: 'i.webp',
    category_id: 13,
  },
  {
    title: 'Шашлык из курицы',
    description:
      'филе бедра курицы, специи, лаваш, лук маринованный, соус сацебели',
    count: '200/50/30 гр',
    price: 650,
    image_url: 'i.webp',
    category_id: 13,
  },
  {
    title: 'Люля-кебаб из баранины',
    description: 'фарш баранины, специи, лаваш, зелень, лук маринованный',
    count: '220/50/30 гр',
    price: 850,
    image_url: 'i.webp',
    category_id: 13,
  },
  {
    title: 'Рёбра свиные BBQ',
    description:
      'рёбра свиные, маринад BBQ, картофель по-деревенски, соус барбекю',
    count: '300/150/30 гр',
    price: 950,
    image_url: 'i.webp',
    category_id: 13,
  },
  {
    title: 'Овощи гриль',
    description:
      'перец болгарский, цукини, баклажан, томаты, специи, масло оливковое',
    count: '350 гр',
    price: 450,
    image_url: 'i.webp',
    category_id: 13,
  },

  // Сэты на компанию (category_id = 14)
  {
    title: 'Сэт «Пивной»',
    description:
      'колбаски баварские, картофель фри, луковые кольца, сырные палочки, соусы',
    count: '200/150/100/100 гр',
    price: 1200,
    image_url: 'i.webp',
    category_id: 14,
  },
  {
    title: 'Сэт «Морской»',
    description:
      'креветки, кальмар кольца, мидии в соусе, картофель по-деревенски, соусы',
    count: '150/150/200/150 гр',
    price: 1400,
    image_url: 'i.webp',
    category_id: 14,
  },
  {
    title: 'Сэт «Гриль»',
    description:
      'шашлык из свинины, шашлык из курицы, люля-кебаб, овощи гриль, лаваш, соусы',
    count: '200/200/220/200/100 гр',
    price: 1800,
    image_url: 'i.webp',
    category_id: 14,
  },

  // Десерты (category_id = 15)
  {
    title: 'Чизкейк Нью-Йорк',
    description: '',
    count: '120 гр',
    price: 350,
    image_url: 'i.webp',
    category_id: 15,
  },
  {
    title: 'Тирамису',
    description: '',
    count: '130 гр',
    price: 400,
    image_url: 'i.webp',
    category_id: 15,
  },
  {
    title: 'Шоколадный фондан с мороженым',
    description:
      'шоколадный кекс с жидкой сердцевиной, шарик ванильного мороженого',
    count: '100/50 гр',
    price: 450,
    image_url: 'i.webp',
    category_id: 15,
  },
  {
    title: 'Медовый торт',
    description: '',
    count: '120 гр',
    price: 380,
    image_url: 'i.webp',
    category_id: 15,
  },
  {
    title: 'Фруктовая тарелка',
    description: 'апельсин, виноград, киви, клубника, мята',
    count: '300 гр',
    price: 500,
    image_url: 'i.webp',
    category_id: 15,
  },

  // Горячие напитки (category_id = 18)
  {
    title: 'Эспрессо',
    description: '',
    count: '30 мл',
    price: 150,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Американо',
    description: '',
    count: '200 мл',
    price: 170,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Капучино',
    description: '',
    count: '300 мл',
    price: 200,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Латте',
    description: '',
    count: '350 мл',
    price: 220,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Раф кофе',
    description: '',
    count: '300 мл',
    price: 250,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Чай чёрный/зелёный',
    description: '',
    count: '500 мл',
    price: 150,
    image_url: 'i.webp',
    category_id: 18,
  },
  {
    title: 'Какао',
    description: '',
    count: '300 мл',
    price: 180,
    image_url: 'i.webp',
    category_id: 18,
  },

  // Холодные напитки (category_id = 19)
  {
    title: 'Лимонад домашний',
    description: 'лимон, мята, сахар, вода',
    count: '500 мл',
    price: 200,
    image_url: 'i.webp',
    category_id: 19,
  },
  {
    title: 'Морс клюквенный',
    description: '',
    count: '500 мл',
    price: 180,
    image_url: 'i.webp',
    category_id: 19,
  },
  {
    title: 'Сок в ассортименте',
    description: '',
    count: '250 мл',
    price: 160,
    image_url: 'i.webp',
    category_id: 19,
  },
  {
    title: 'Вода минеральная с газом/без газа',
    description: '',
    count: '500 мл',
    price: 120,
    image_url: 'i.webp',
    category_id: 19,
  },
  {
    title: 'Кола/Фанта/Спрайт',
    description: '',
    count: '500 мл',
    price: 150,
    image_url: 'i.webp',
    category_id: 19,
  },

  // Энергетические напитки (category_id = 20)
  {
    title: 'Энергетический напиток Red Bull',
    description: '',
    count: '0.25 л',
    price: 200,
    image_url: 'i.webp',
    category_id: 20,
  },
  {
    title: 'Энергетический напиток Burn',
    description: '',
    count: '0.25 л',
    price: 190,
    image_url: 'i.webp',
    category_id: 20,
  },

  // Соки (category_id = 21)
  {
    title: 'Сок апельсиновый',
    description: '',
    count: '200 мл',
    price: 160,
    image_url: 'i.webp',
    category_id: 21,
  },
  {
    title: 'Сок яблочный',
    description: '',
    count: '200 мл',
    price: 150,
    image_url: 'i.webp',
    category_id: 21,
  },
  {
    title: 'Сок мультифрукт',
    description: '',
    count: '200 мл',
    price: 160,
    image_url: 'i.webp',
    category_id: 21,
  },

  // Сладкий напиток «Крымский» (category_id = 24 — судя по твоему списку, это отдельная категория)
  {
    title: 'Сладкий напиток «Крымский»',
    description: '',
    count: '500 мл',
    price: 180,
    image_url: 'i.webp',
    category_id: 24,
  },
];
