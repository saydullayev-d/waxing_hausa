const AddReview = () => {
    return (
        <div className="flex justify-center items-center mt-20 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-5xl font-bold mb-6">УЖЕ БЫЛИ У НАС?</h1>
                <p className="text-lg leading-relaxed mb-8">
                    Оцените наши услуги и поделитесь своим мнением!<br />
                    Не стесняйтесь делиться впечатлениями и предлагать улучшения.<br />
                    Мы всегда рады услышать ваше мнение!
                </p>
                <button className="px-6 py-3 text-lg uppercase border-2 border-black rounded-full bg-transparent hover:bg-black hover:text-white transition-colors duration-300"
                onClick={() => window.open('https://yandex.ru/maps/10262/yerevan/?ll=44.520415%2C40.189914&mode=search&oid=180162107145&ol=biz&z=16', '_blank')}
                >
                    Оставить отзыв
                </button>
            </div>
        </div>
    );
};

export default AddReview;