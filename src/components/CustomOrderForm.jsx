import { useState } from 'react'
import { Upload, X, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import Button from './Button'

const ORDER_IMAGE =
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1000&q=80'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  productType: '',
  guests: '',
  flavor: '',
  theme: '',
  details: '',
  budget: '',
}

export default function CustomOrderForm() {
  const ref = useReveal()
  const [form, setForm] = useState(initialForm)
  const [fileName, setFileName] = useState('')
  const [showModal, setShowModal] = useState(false)

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setForm(initialForm)
    setFileName('')
  }

  const fieldClass =
    'w-full rounded-xl border border-cocoa/10 bg-white/90 px-4 py-3 text-sm text-cocoa outline-none transition-colors placeholder:text-cocoa/35 focus:border-rose focus:ring-2 focus:ring-rose/20'

  const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-[0.12em] text-cocoa-soft'

  return (
    <section id="order" className="section-pad scroll-mt-24 bg-ivory" aria-labelledby="order-heading">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-rose">
              Custom Order
            </p>
            <h2
              id="order-heading"
              className="font-display text-[2.15rem] leading-[1.1] text-cocoa min-[375px]:text-4xl sm:text-5xl"
            >
              Tell Us Your Vision
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cocoa-soft sm:text-base">
              Skip the long DM thread. Share clear details here — this demo form is ready to
              connect to email or a real ordering system later.
            </p>
            <div className="mt-8 hidden overflow-hidden rounded-2xl shadow-soft lg:block">
              <img
                src={ORDER_IMAGE}
                alt="Beautiful bakery dessert inspiration"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-cocoa/8 bg-white/80 p-5 shadow-soft sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input id="name" required value={form.name} onChange={update('name')} className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} className={fieldClass} placeholder="you@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" type="tel" value={form.phone} onChange={update('phone')} className={fieldClass} placeholder="(555) 000-0000" />
              </div>
              <div>
                <label htmlFor="eventDate" className={labelClass}>Event Date</label>
                <input id="eventDate" type="date" value={form.eventDate} onChange={update('eventDate')} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="eventType" className={labelClass}>Event Type</label>
                <select id="eventType" value={form.eventType} onChange={update('eventType')} className={fieldClass}>
                  <option value="">Select event</option>
                  <option>Birthday</option>
                  <option>Graduation</option>
                  <option>Baby Shower</option>
                  <option>Wedding</option>
                  <option>Anniversary</option>
                  <option>Celebration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="productType" className={labelClass}>Product Type</label>
                <select id="productType" value={form.productType} onChange={update('productType')} className={fieldClass}>
                  <option value="">Select product</option>
                  <option>Celebration Cake</option>
                  <option>Custom Cake</option>
                  <option>Cupcakes</option>
                  <option>Cookies</option>
                  <option>Brownies</option>
                  <option>Dessert Box</option>
                </select>
              </div>
              <div>
                <label htmlFor="guests" className={labelClass}>Guests</label>
                <input id="guests" value={form.guests} onChange={update('guests')} className={fieldClass} placeholder="e.g. 20" />
              </div>
              <div>
                <label htmlFor="flavor" className={labelClass}>Flavor</label>
                <input id="flavor" value={form.flavor} onChange={update('flavor')} className={fieldClass} placeholder="Vanilla, chocolate…" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="theme" className={labelClass}>Theme / Colors</label>
                <input id="theme" value={form.theme} onChange={update('theme')} className={fieldClass} placeholder="Dusty rose & sage…" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="details" className={labelClass}>Design Details</label>
                <textarea
                  id="details"
                  rows={4}
                  value={form.details}
                  onChange={update('details')}
                  className={`${fieldClass} resize-y`}
                  placeholder="Design ideas, message on the cake, inspiration…"
                />
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>Budget</label>
                <select id="budget" value={form.budget} onChange={update('budget')} className={fieldClass}>
                  <option value="">Select range</option>
                  <option>Under $50</option>
                  <option>$50 – $100</option>
                  <option>$100 – $200</option>
                  <option>$200+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <span className={labelClass}>Reference Image</span>
                <label
                  htmlFor="reference"
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-cocoa/20 bg-cream/50 px-4 py-5 text-center transition-colors hover:border-rose/40"
                >
                  <Upload size={18} className="text-rose" aria-hidden="true" />
                  <span className="text-xs text-cocoa-soft">
                    {fileName || 'Upload inspiration (demo UI)'}
                  </span>
                  <input
                    id="reference"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                  />
                </label>
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" fullWidth>
                Send My Request
              </Button>
              <p className="mt-3 text-center text-xs text-cocoa-soft/70">
                Demo form — does not send data to a server.
              </p>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa/40 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <div className="relative w-full max-w-md rounded-3xl bg-cream p-8 text-center shadow-lift">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-1.5 text-cocoa-soft hover:text-cocoa"
              aria-label="Close confirmation"
            >
              <X size={18} />
            </button>
            <CheckCircle2 size={40} className="mx-auto text-sage-dark" aria-hidden="true" />
            <h3 id="demo-modal-title" className="mt-4 font-display text-3xl text-cocoa">
              Your sweet request is ready!
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cocoa-soft">
              Thank you! In the full version, this request can be connected directly to Papa
              E&apos;s ordering system.
            </p>
            <div className="mt-8">
              <Button onClick={closeModal} fullWidth>
                Continue Browsing
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
