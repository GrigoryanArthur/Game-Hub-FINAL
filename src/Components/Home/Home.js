import { fontSize } from "@mui/system";
import "./Home.css";

export default function Home() {
  return (
    <div className="conteiner">
      <h2 style={{ color: "red" }}>Բարի գալուստ խաղային կենտրոն</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Կայքը պատրաստվել է 4-րդ խմբի մասնակիցների համատեղ ջանքերով։ Հատուկ
        շնորհակալություն ենք հայտնում խմբի մասնակից Հովհաննես Հակոբյանին՝
        գործադրած ջանքերի համար
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        Կայքում տեղադրված են թվով 3 խաղեր՝
        <ul>
          <br></br>
          <li>
            Չինգաչունգ։ Սա մանկությունից մեզ բոլորիս ծանոթ խաղն է։ Դուք ընտրելու
            եք Ձեր նախընտրած քայլը, միաժամանակ համակարգիչը պատահականորեն կընտրի
            3 հնարավոր քայլերից (թուղթ, մկրատ, քար), որի հիման վրա կորոշվի՝
            հաղթել եք, թե պարտվել
          </li>
          <br></br>
          <li>
            Խաղաքարտեր։ Սա հիշողությունը մարզելուն միտված խաղ է, որի ընթացքում
            բացում եք քարտեր, հիշում եք դրանց տեղադիրքը եւ նման քարտ բացելիս՝
            հիշողությամբ վերականգնում եք նմանատիպ առաջին քարտի տեղադիրքը
          </li>
          <br></br>
          <li>
            Հիշողության մարզիչ։ Այս խաղը իր խաղային պրոցեսով եւ տրամաբանությամբ
            մոտ է նախորդ խաղին
          </li>
        </ul>
      </h3>
    </div>
  );
}