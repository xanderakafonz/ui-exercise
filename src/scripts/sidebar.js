import $ from 'jquery'

import 'velocity'

const Sidebar = class {
    constructor() {
        this.$toggle = $('.toggle')
        this.$sidebar = $('.sidebar')
        this.$main = $('.main')

        this._init_events()
    }

    _init_events() {
       this.$toggle.on('click', 'a', (e) => {
            e.preventDefault()

            const el = $(e.currentTarget)

            if (el.hasClass('active')) {
                this.animate_in()
                el.removeClass('active')
            }
            else {
                this.animate_out()
                el.addClass('active')
            }
       })
    }

    animate_in() {
        this.$main.velocity({
            tween: [70, 100]
        }, {
            progress: (elms, c, r, s, tween) => {
                this.$main.css('flex-basis', tween + '%')
            }
        })

        this.$sidebar.velocity({
            tween: [30, 0]
        }, {
            begin: () => {
                this.$sidebar.addClass('open')
            },
            progress: (elms, c, r, s, tween) => {
                this.$sidebar.css('flex-basis', tween + '%')
            }
        })
    }

    animate_out() {
        this.$main.velocity({
            tween: [100, 70]
        }, {
            progress: (elms, c, r, s, tween) => {
                this.$main.css('flex-basis', tween + '%')
            }
        })

        this.$sidebar.velocity({
            tween: [0, 30]
        }, {
            progress: (elms, c, r, s, tween) => {
                this.$sidebar.css('flex-basis', tween + '%')
            },
            complete: () => {
                this.$sidebar.removeClass('open')
            }
        })
    }
}

export default Sidebar
