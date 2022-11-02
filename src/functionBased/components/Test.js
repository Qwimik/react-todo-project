// import { FaPlusCircle } from "react-icons/fa"

// <button className="input-submit">Submit</button>

// <button className="input-submit">
// <FaPlusCircle />
// </button>

// Збережіть файл і перейдіть до нього TodoItem.js.

// Додайте це до початку файлу:
// import { FaTrash } from "react-icons/fa"

// Потім знайдіть це:
// <button onClick={() => props.deleteTodoProps(id)}>Delete</button>

// І замініть цим:
//  <button onClick={() => props.deleteTodoProps(id)}>
//   <FaTrash />
// </button>

// Як показано вище, ми імпортували наші значки з набору значків
// Font Awesome. Перегляньте назву бібліотеки піктограм із префіксом
// піктограми. Крім того, кожен із набору піктограм має свій шлях,
// як показано в операторі імпорту.
// ES6 importдозволяє нам включити лише ті піктограми,
// які використовує наша програма, замість того, щоб переносити
// всі піктограми (що, як правило, збільшує розмір
// нашої програми) із набору.

// За замовчуванням ці значки успадковують стилі CSS
// батьківського елемента. Ви можете продовжити і стилізувати їх
// безпосередньо у вашому файлі CSS як SVG, націлившись на його
// батьківський елемент.
// Піктограми React також дозволяють нам передавати унікальні
// атрибути (включаючи color, sizeта className) для стилізації окремих
// іконок.

{
  /* <button className="input-submit">
  <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
</button>
Крім того, як і елемент JSX, ви можете передати властивість, 
styleщоб налаштувати свої піктограми. Ми підемо з таким підходом.
Назад до InputTodo.jsфайлу. Оновіть піктограму, щоб мати:
<button className="input-submit">
  <FaPlusCircle
    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
  />
</button>
Давайте зробимо те саме для піктограми видалення. 

Відкрийте TodoItem.jsфайл і оновіть піктограму, щоб мати:

<button onClick={() => props.deleteTodoProps(id)}>
  <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
</button> */
}

// Цього разу propsповертає корисну інформацію, яка містить об’єкти history, locationі .match
// Наразі увага зосереджена на matchоб’єкті.
// Там ми маємо доступ до url, pathтощо params.
// Нам знадобиться url для створення вкладених посилань; шлях для вкладених маршрутів, тоді як параметри , необхідні для динамічних маршрутів.
// Але чому ми не отримуємо їх із попередніми налаштуваннями?
// До появи хуків у маршрутизаторі React componentпроп в Routeелементі є одним із методів, які використовуються для відтворення компонентів. Але тепер ми візуалізуємо їх як дочірній елемент.
// І через один із гачків ми можемо отримати доступ до відповідного об’єкта. Цей гачок називається useRouteMatch. Він також доступний в react-router-domмодулі.
// Давайте використовувати його.
// Спочатку поверніть Routeелемент у TodoContainer.jsфайлі, щоб мати:
// <Route path="/about">
//   <About />
// </Route>
// Збережіть файл.
// Перейдіть до About.jsфайлу та імпортуйте хук так:
// import { useRouteMatch } from "react-router-dom"
// Якщо ви зареєструєте цей хук і перевірите консоль браузера, ви повинні мати доступ до тих самих властивостей, які ми бачили раніше для об’єкта відповідності.
// const About = () => {
//   console.log(useRouteMatch())
//   return (
//     ...
//   )
// }
// export default About
// Не забудьте перейти до, /aboutщоб побачити їх.
// Тепер давайте використаємо повернуті дані для створення вкладених посилань і вкладених маршрутів.
// Це просто.
// Пам’ятайте, я згадував раніше, що urlі pathвикористовуються для створення цих посилань відповідно.
// Отже, давайте дістанемо їх із гачків (ми знаємо, що вони там, як ми бачили з останнього зображення).
// Додайте це над returnоператором у Aboutкомпоненті.
// const { url, path } = useRouteMatch()
// Then, update the return statement so you have:
// return (
//   <div>
//     <ul>
//       <li>
//         <Link to={`${url}/about-app`}>About App</Link>
//       </li>
//       <li>
//         <Link to={`${url}/about-author`}>About Author</Link>
//       </li>
//     </ul>
//     <Route path={`${path}/:slug`}>
//       <SinglePage />
//     </Route>
//   </div>
// )
// Перш ніж зберегти. Зверніть увагу, що ми представили кілька речей. Ми використовуємо компонент <Links>і . <Route>Тож оновіть імпорт, щоб мати:
// import { Link, useRouteMatch, Route } from "react-router-dom"
// Зауважте також, що ми використовуємо <SinglePage />компонент в Routeелементі.
// Тож імпортуйте це так:
// import SinglePage from "./SinglePage"
// Потім створіть його ( SinglePage.js) у Pagesпапці. Ви можете зробити це простим, додавши цей функціональний компонент.
// import React from "react"
// const SinglePage = () => {
//   return <div>Hello from single page</div>
// }
// export default SinglePage
// Зберігайте файли та переходьте між різними сторінками програми. Зверніть увагу, як URL-адреса динамічно змінюється залежно від поточного перегляду.
// Що відбувається?
// До цього моменту код не потребує пояснень:
// <Route path={`${path}/:slug`}>
//   <SinglePage />
// </Route>
// В є . path_ Ми вже бачили це на останньому скріншоті.${path}/about
// Ще одна річ, яку слід зауважити, полягає в тому, що :slugзбігається з будь-чим після /about/. Це означає, що :slugвідповідає на about-appсторінці /about/about-app.
// Ми матимемо доступ до :slugдочірнього елемента SinglePage. Потім ми можемо використовувати його для динамічного відображення потрібного вмісту на сторінці.
// Будь ласка, зверніть увагу, вам не потрібно телефонувати slug. Ви можете назвати його як завгодно.
// Коли шлях збігається і дочірній елемент буде відображено, ми можемо використати хук, викликаний useParamsдля доступу до paramsпоточного <Route>. У нашому випадку ми матимемо доступ до :slugвідрендереного компонента.
// Давайте це доведемо.
// У SinglePage.jsфайл імпортуйте useParamsхук і зареєструйте його в консолі.
// import React from "react"
// import { useParams } from "react-router-dom"
// const SinglePage = () => {
//   console.log(useParams())
//   return <div>Hello from single page</div>
// }
// export default SinglePage
// Збережіть свій файл. Перейдіть на одну сторінку, коли консоль відкрито. Ви повинні побачити слаг сторінки прямо там.
// добре. Майже там.
// Тепер давайте подивимося, як відображати динамічний вміст на основі шляху URL-адреси сторінки.
// У SinglePage.jsфайлі додайте ці дані над returnзаявою:
// const aboutData = [
//   {
//     slug: "about-app",
//     title: "About the App",
//     description:
//       "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
//   },
//   {
//     slug: "about-author",
//     title: "About the Author",
//     description:
//       "This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic.",
//   },
// ]
// Потім додайте наступне під даними (але над returnоператором).
// const { slug } = useParams()
// const aboutContent = aboutData.find(item => item.slug === slug)
// const { title, description } = aboutContent
// Як згадувалося раніше, ми отримуємо слаг поточної сторінки через useParamsхук.
// Потім, за допомогою find()методу, ми будемо повертати перший об’єкт у масиві, чий слаг відповідає поточному слагу сторінки. Потім повернутий об’єкт зберігається в aboutContentзмінній. Звідти ми деструктуруємо titleта description.
// Тепер ви можете оновити returnзаяву, щоб мати:
// return (
//   <div>
//     <h1>{title}</h1>
//     <p>{description}</p>
//   </div>
// )
// Збережіть свій файл і перейдіть на сторінку про єдину інформацію. Ви повинні бачити, що ваш вміст динамічно відображається на сторінках.
