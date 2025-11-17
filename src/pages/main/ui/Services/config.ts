import services1Image from '@/shared/assets/images/services1.png'
import services2Image from '@/shared/assets/images/services2.png'
import services3Image from '@/shared/assets/images/services3.png'

export const cardsData = [
  {
    image: services1Image,
    title: 'ЙОГА',
    subtitle: 'Групповая тренировка',
    description:
      'Практика йоги помогает достичь баланса между телом и разумом, что положительно влияет на работу организма и психологическое благополучие.',
    dressCodeLabel: 'Форма одежды',
    dressCodeText: 'Несвободная спортивная одежда, носочки.',
  },
  {
    image: services2Image,
    title: 'СПОРТ ЗАЛ',
    subtitle: 'Индивид. тренировка',
    description:
      'В зале представлены тренажеры наивысшего качества на все группы мышц. Первая ознакоми-тельная тренировка с тренером - бесплатно.',
    dressCodeLabel: 'Форма одежды',
    dressCodeText: 'Несвободная спортивная одежда, носочки.',
  },
  {
    image: services3Image,
    title: 'СТЭП',
    subtitle: 'Групповая тренировка ',
    description:
      'Эффективная кардиотренировка, позволяющая улучшить физическую форму, развить выносливость и координацию, а также получить заряд энергии.',
    dressCodeLabel: 'Форма одежды',
    dressCodeText: 'Удобная спортивная одежда, кроссовки.',
  },
] as const

