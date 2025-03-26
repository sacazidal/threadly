import LastUpdate from "@/components/LastUpdate";
import Questions from "@/components/Questions";
import SectionPolicy from "@/components/SectionPolicy";
import SectionPolicyList from "@/components/SectionPolicyList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Правила использования",
  description: "Ознакомьтесь с правилами использования интернет-магазина",
};

export default function TermsPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 dark:text-neutral-50 text-neutral-950 text-center">
      <div className="mx-auto">
        <LastUpdate title="Правила использования Threadly" />
        <div className="space-y-12">
          <SectionPolicy
            title="1. Общие положения"
            label='Настоящие Правила использования ("Правила") регулируют ваше
              взаимодействие с интернет-магазином Threadly ("далее - Сервис").
              Пользуясь нашим Сервисом, вы соглашаетесь с этими Правилами.'
          />
          <SectionPolicyList
            title="2. Условия заказа"
            text1="Минимальная сумма заказа не установлена"
            text2="Оплата принимается банковскими картами и электронными платежами"
            text3="Товары доступны к заказу при наличии на складе"
            text4="Мы оставляем право ограничивать количество товара в одном заказе"
          />
          <SectionPolicy
            title="3. Возврат и обмен"
            label="Возврат товара надлежащего качества возможен в течение 14 дней с
              момента получения заказа. Товар должен сохранить товарный вид и
              оригинальную упаковку."
          />
          <SectionPolicy
            title="4. Интеллектуальная собственность"
            label="Все материалы, размещенные на Сервисе (тексты, изображения,
              логотипы), являются собственностью Threadly или используются с
              разрешения правообладателей."
          />
          <SectionPolicy
            title="5. Заключительные положения"
            label="Threadly оставляет за собой право вносить изменения в эти Правила.
              Актуальная версия всегда доступна на этой странице."
          />
          <Questions fragment="наших Правил" />
        </div>
      </div>
    </div>
  );
}
