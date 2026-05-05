import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">КРОВЛЯ ПОД КЛЮЧ</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </a>
              <a href="#works" className="text-muted-foreground hover:text-foreground transition-colors">
                Работы
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
            </div>
            <Button variant="outline" size="sm">
              Вызвать мастера
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[80vh]">
            {/* Основной контент Hero */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Icon name="HardHat" className="w-3 h-3 mr-1" />
                    Ремонт кровли на дачах
                  </Badge>
                  <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-balance">
                    Надёжная кровля
                    <span className="text-primary block">под ключ</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
                    Ремонт и замена кровли на дачах и загородных домах. Работаем быстро, с гарантией. Выезд на
                    замер бесплатно — оцениваем объём работ в день обращения.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8">
                    Получить расчёт
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                    Смотреть работы
                  </Button>
                </div>
              </div>
            </div>

            {/* Hero сетка изображений */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 auto-rows-fr h-fit self-center">
              <Card className="aspect-square bg-card overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/521d556f-5a41-49b3-a359-97c5f86cbed3.jpg"
                  alt="Ремонт кровли на даче"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-primary/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/5b0394b3-1fe1-4ef2-af2a-6b67ac75f26d.jpg"
                  alt="Укладка кровельного материала"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-accent/20 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/8ff28100-e5ac-4143-bc8c-2a7773564078.jpg"
                  alt="Готовая дача после ремонта кровли"
                  className="w-full h-full object-cover"
                />
              </Card>
              <Card className="aspect-square bg-card overflow-hidden rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground mt-1">гарантия на работы</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Ремонт кровли без лишних хлопот — берём на себя весь процесс от замера до сдачи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Ruler" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Замер</h3>
              <p className="text-muted-foreground">
                Бесплатно выезжаем на объект, измеряем кровлю и составляем подробную смету без скрытых платежей.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Wrench" className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Работа</h3>
              <p className="text-muted-foreground">
                Опытная бригада выполняет все виды кровельных работ в срок. Используем только проверенные материалы.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Гарантия</h3>
              <p className="text-muted-foreground">
                Даём письменную гарантию 5 лет на все виды работ. Если что-то пойдёт не так — устраним бесплатно.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Сетка услуг */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">НАШИ УСЛУГИ</h2>
            <Button variant="outline">Все услуги</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/521d556f-5a41-49b3-a359-97c5f86cbed3.jpg"
                  alt="Полная замена кровли"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4">Популярно</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Полная замена кровли</h3>
                <p className="text-muted-foreground mb-4">Демонтаж старого покрытия и монтаж нового под ключ</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 3 дней
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4" />
                    гарантия 5 лет
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-accent/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/5b0394b3-1fe1-4ef2-af2a-6b67ac75f26d.jpg"
                  alt="Частичный ремонт"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Быстро
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Частичный ремонт</h3>
                <p className="text-muted-foreground mb-4">Устраняем протечки и повреждённые участки кровли</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 1 дня
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4" />
                    гарантия 3 года
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-video bg-primary/20 relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/8ff28100-e5ac-4143-bc8c-2a7773564078.jpg"
                  alt="Утепление кровли"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4" variant="outline">
                  Сезонно
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Утепление кровли</h3>
                <p className="text-muted-foreground mb-4">Монтаж утеплителя и пароизоляции для тёплых зим</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" className="w-4 h-4" />
                    от 2 дней
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" className="w-4 h-4" />
                    гарантия 5 лет
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция О нас */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-balance">Ремонтируем кровли на дачах с 2010 года</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Мы специализируемся на кровельных работах для дач и загородных домов. За 14 лет работы
                  выполнили более 500 объектов в Подмосковье и ближайших регионах. Работаем с металлочерепицей,
                  профнастилом, мягкой кровлей и ондулином.
                </p>
                <p>
                  Каждый объект — это не просто ремонт, а надёжная защита вашей дачи на долгие годы. Подбираем
                  материалы с учётом бюджета и особенностей конструкции.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Объектов сдано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">14 лет</div>
                  <div className="text-muted-foreground">Опыт работы</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/df4516e4-5143-4099-a157-9ec26ab3ef20/files/8ff28100-e5ac-4143-bc8c-2a7773564078.jpg"
                  alt="Готовая дача после ремонта"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Протекает кровля? Решим за 1 день!</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Оставьте заявку — наш мастер бесплатно приедет на замер и составит смету. Работаем
            без предоплаты, даём письменную гарантию на все виды работ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Вызвать мастера бесплатно
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">КРОВЛЯ ПОД КЛЮЧ</div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Ремонт и замена кровли на дачах и загородных домах. Работаем быстро, качественно,
                с гарантией 5 лет.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Телеграм
                </Button>
                <Button variant="outline" size="sm">
                  ВКонтакте
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Московская область</p>
                <p>Выезд по всему Подмосковью</p>
                <p>Пн–Вс 8:00 – 20:00</p>
                <p>+7 (000) 000-00-00</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Замена кровли</p>
                <p>Ремонт протечек</p>
                <p>Утепление кровли</p>
                <p>Монтаж водостоков</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Кровля под ключ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
