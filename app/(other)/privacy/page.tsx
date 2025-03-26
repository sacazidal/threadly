import LastUpdate from "@/components/LastUpdate";
import Questions from "@/components/Questions";
import SectionPolicy from "@/components/SectionPolicy";
import SectionPolicyList from "@/components/SectionPolicyList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Ознакомьтесь с нашей политикой обработки персональных данных",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 dark:text-neutral-50 text-neutral-950 text-center">
      <div className="mx-auto">
        <LastUpdate title="Политика конфиденциальности Threadly" />
        <div className="space-y-12">
          <SectionPolicy
            title="1. Какие данные мы собираем"
            label="При оформлении заказа мы запрашиваем ваше имя, контактные данные,
              адрес доставки и платежную информацию. Также мы автоматически
              собираем технические данные (IP-адрес, тип браузера)."
          />
          <SectionPolicyList
            title="2. Как мы используем ваши данные"
            text1="Для обработки и выполнения ваших заказов"
            text2="Для улучшения качества нашего сервиса"
            text3="Для отправки маркетинговых материалов (только с вашего согласия)"
            text4="Для предотвращения мошеннических действий"
          />
          <SectionPolicy
            title="3. Защита данных"
            label="Мы используем современные методы шифрования (SSL) для защиты вашей
              информации. Доступ к персональным данным имеют только
              уполномоченные сотрудники."
          />
          <SectionPolicy
            title="4. Файлы cookies"
            label="Наш сайт использует cookies для работы корзины, анализа трафика и
              персонализации контента. Вы можете отключить cookies в настройках
              браузера."
          />
          <SectionPolicy
            title="5. Ваши права"
            label="Вы имеете право запросить доступ к вашим персональным данным, их
              исправление или удаление. Для этого обратитесь в нашу службу
              поддержки."
          />
          <Questions fragment="политике конфиденциальности" />
        </div>
      </div>
    </div>
  );
}
