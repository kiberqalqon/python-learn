import { PythonTopic } from '../types';

export const pythonTopics: PythonTopic[] = [
  {
    id: '1',
    title: 'Python kirish va asoslari',
    description: 'Python dasturlash tili haqida umumiy ma\'lumot, dasturlash muhitini o\'rnatish va birinchi dastur',
    videoUrl: 'https://www.youtube.com/embed/nitlLnbp7ak?si=2SgwLUinBswNnioD',
    content: `Python - bu yuqori darajali, interpretatsiya qilinadigan dasturlash tili. U o'rganish uchun oson va keng qo'llaniladigan til hisoblanadi.

    • Python nima va uning afzalliklari
    • Dasturlash muhitini o'rnatish (IDLE, VS Code)
    • Birinchi dastur (Hello World)
    • Python interpretatori bilan ishlash`
  },
  {
    id: '2',
    title: 'O\'zgaruvchilar va ma\'lumot turlari',
    description: 'Python dasturlash tilida o\'zgaruvchilar va asosiy ma\'lumot turlari',
    videoUrl: 'https://www.youtube.com/embed/4-Sj_owtx3Q?si=SoopcHWbqPAQcSp7',
    content: `O'zgaruvchilar va ma'lumot turlari dasturlashning asosiy tushunchalaridan biri:

    • O'zgaruvchilar yaratish va ishlatish
    • Asosiy ma'lumot turlari:
      - int (butun sonlar)
      - float (o'nlik sonlar)
      - str (matnlar)
      - bool (mantiqiy)
    • type() funksiyasi
    • O'zgaruvchilar bilan ishlash qoidalari`
  },
  {
    id: '3',
    title: 'Operatorlar',
    description: 'Arifmetik, taqqoslash va mantiqiy operatorlar',
    videoUrl: 'https://www.youtube.com/embed/slMBSFsORow?si=8CRmgrlPgRmocJmR',
    content: `Pythonda operatorlar bilan ishlash:

    • Arifmetik operatorlar:
      - Qo'shish (+)
      - Ayirish (-)
      - Ko'paytirish (*)
      - Bo'lish (/)
      - Butun bo'lish (//)
      - Qoldiqli bo'lish (%)
      - Daraja (**)
    
    • Taqqoslash operatorlari:
      - Tenglik (==)
      - Tengsizlik (!=)
      - Katta (>)
      - Kichik (<)
      - Katta yoki teng (>=)
      - Kichik yoki teng (<=)
    
    • Mantiqiy operatorlar:
      - and
      - or
      - not`
  },
  {
    id: '4',
    title: 'Shart operatorlari',
    description: 'if, elif, else operatorlari yordamida shartli dasturlash',
    videoUrl: 'https://www.youtube.com/embed/RhgjRtIEFnI?si=wZxAVggbrUg3yQhu',
    content: `Shart operatorlari dastur oqimini boshqarish uchun ishlatiladi:

    • if operatori
    • elif (else if) operatori
    • else operatori
    • Ichma-ich shart operatorlari
    • Mantiqiy ifodalar bilan ishlash`
  },
  {
    id: '5',
    title: 'Takrorlanish operatorlari',
    description: 'for va while sikllari bilan ishlash',
    videoUrl: 'https://www.youtube.com/embed/z0dA5EuQhCo?si=1dNOTeaDM7GWCwga',
    content: `Takrorlanish operatorlari ma'lum bir kodni qayta-qayta bajarish uchun ishlatiladi:

    • for sikli
    • while sikli
    • range() funksiyasi
    • break operatori
    • continue operatori
    • Ichma-ich sikllar`
  },
  {
    id: '6',
    title: 'Ma\'lumotlar tuzilmalari',
    description: 'List, Tuple, Set va Dictionary bilan ishlash',
    videoUrl: 'https://www.youtube.com/embed/B56tkdlfuec?si=VquB2CJISay323vk',
    content: `Python dasturlash tilida asosiy ma'lumotlar tuzilmalari:

    • List (Ro'yxat):
      - Yaratish va elementlarga murojaat
      - append(), remove(), pop() metodlari
      - Ro'yxatni tartiblash va kesish
    
    • Tuple (O'zgarmas ro'yxat):
      - Yaratish va ishlatish
      - List va Tuple farqlari
    
    • Set (To'plam):
      - Yaratish va elementlar bilan ishlash
      - To'plamlar ustida amallar
    
    • Dictionary (Lug'at):
      - Kalit-qiymat juftliklari
      - Lug'at metodlari`
  },
  {
    id: '7',
    title: 'Funksiyalar',
    description: 'Funksiyalar yaratish va ulardan foydalanish',
    videoUrl: 'https://www.youtube.com/embed/4odkjB1BEaY?si=RDvT_mMkA4BnLulk',
    content: `Funksiyalar dastur kodini qayta ishlatish imkonini beradi:

    • Funksiya yaratish (def)
    • Parametrlar va argumentlar
    • return operatori
    • Default parametrlar
    • *args va **kwargs
    • Lambda funksiyalar
    • Rekursiv funksiyalar`
  },
  {
    id: '8',
    title: 'OOP asoslari',
    description: 'Object Oriented Programming asoslari',
    videoUrl: 'https://www.youtube.com/embed/jSfLBnrm5Ps?si=TpbYvA6BFzyD9QLB',
    content: `Obyektga yo'naltirilgan dasturlash asoslari:

    • Class va obyektlar
    • Konstruktor (__init__)
    • Metodlar va atributlar
    • Inheritance (Vorislik)
    • Polymorphism (Ko'p shakllilik)
    • Encapsulation (Inkapsulyatsiya)`
  },
  {
    id: '9',
    title: 'Fayllar bilan ishlash',
    description: 'Fayllarni o\'qish va yozish',
    videoUrl: 'https://www.youtube.com/embed/2WmFFBV8yAw?si=vvM-s8Gha7PoJ7AJ',
    content: `Fayllar bilan ishlash asoslari:

    • Fayl ochish (open())
    • Fayldan o'qish (read())
    • Faylga yozish (write())
    • with operatori
    • CSV fayllar bilan ishlash
    • JSON fayllar bilan ishlash`
  },
  {
    id: '10',
    title: 'Xatolarni qayta ishlash',
    description: 'Try-except bloklari va xatolarni boshqarish',
    videoUrl: 'https://www.youtube.com/embed/-fpxjTiQ9-k?si=Avx339QEeKv2aRBy',
    content: `Xatolarni qayta ishlash mexanizmlari:

    • try-except bloki
    • finally bloki
    • raise operatori
    • Custom exception yaratish
    • Xatolar ierarxiyasi`
  },
  {
    id: '11',
    title: 'Modullar va kutubxonalar',
    description: 'Python kutubxonalari va modullar bilan ishlash',
    videoUrl: 'https://www.youtube.com/embed/RvSAu--evZo?si=drrrgqVBGySaUwmN',
    content: `Modullar va kutubxonalar bilan ishlash:

    • import operatori
    • from ... import ...
    • Standart kutubxonalar:
      - math
      - random
      - datetime
      - os
    • pip package manager
    • Virtual muhit (venv)`
  },
  {
    id: '12',
    title: 'Web dasturlash',
    description: 'Flask va Django frameworklari',
    videoUrl: 'https://www.youtube.com/embed/49_C_3kkW6g?si=KUbYSN8MzNx0dYPm',
    content: `Web dasturlash asoslari:

    • Flask framework:
      - Route va view funksiyalar
      - Template yaratish
      - Form bilan ishlash
    
    • Django framework:
      - MVT arxitekturasi
      - Model yaratish
      - Admin panel
      - URL mapping`
  }
];