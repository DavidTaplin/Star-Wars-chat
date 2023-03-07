import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

