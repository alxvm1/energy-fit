// import mockImage from '@/shared/assets/images/mock.png'
import { CustomButton, CustomInput, CustomSelect, CustomTextarea } from '@/shared/ui'
import { useState, type ChangeEvent, type FC, type FormEvent } from "react"
import './SignUpForm.css'
import { type ISignUpFormData } from './types'

const MAX_COMMENT_LENGTH = 250

export const SignUpForm: FC = () => {
    const [formData, setFormData] = useState<ISignUpFormData>({
        service: '',
        fullName: '',
        phone: '',
        email: '',
        comment: '',
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const isFormValid =
        formData.service !== '' &&
        formData.fullName.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.comment.trim() !== ''

    return (
        <>
            <h2 className="form__title">ЗАПИСАТЬСЯ</h2>
            <div className="form__container">
                <form className="form" onSubmit={handleSubmit} noValidate>
                    <div className="form__field">
                        <CustomSelect
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            placeholder="Выберите услугу"
                            options={[
                                { value: '1', label: 'Услуга 1' },
                                { value: '2', label: 'Услуга 2' },
                                { value: '3', label: 'Услуга 3' },
                            ]}
                        />
                    </div>
                    <div className="form__field">
                        <CustomInput
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="ФИО"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="form__field">
                        <CustomInput
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Телефон"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            pattern="[0-9+\-\s()]+"
                        />
                    </div>
                    <div className="form__field">
                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="form__field">
                        <CustomTextarea
                            id="comment"
                            name="comment"
                            placeholder="Комментарий"
                            value={formData.comment}
                            onChange={handleChange}
                            rows={4}
                            maxLength={MAX_COMMENT_LENGTH}
                            required
                            aria-required="true"
                        />
                    </div>
                    <CustomButton
                        type="submit"
                        disabled={!isFormValid}
                    >
                        отправить
                    </CustomButton>
                </form>
                {/* <div className="form__image">
                    <img
                        src={mockImage}
                        alt="Форма записи"
                        loading="lazy"
                        decoding="async"
                    />
                </div> */}
            </div>
            <div className="form__description">
                <p className="form__description-text">
                    После отправки сообщения менеджер свяжется с Вами для подтверждения записи и уточнения способа оплаты.
                </p>
            </div>
        </>
    )
}
