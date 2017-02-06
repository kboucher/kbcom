export default function() {
    this.transition(
        this.fromRoute('index'),
        this.toRoute('contact'),
        this.use('toRight'),
        this.reverse('toLeft')
    );
    this.transition(
        this.fromRoute('index'),
        this.toRoute('resume'),
        this.use('toUp'),
        this.reverse('toDown')
    );
    this.transition(
        this.fromRoute('index'),
        this.toRoute('resume'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
}