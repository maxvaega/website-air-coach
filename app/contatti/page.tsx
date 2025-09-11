"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MessageCircle, HelpCircle, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "Sono interessato ad AIR Coach",
    messaggio: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Compose email
    const subject = encodeURIComponent(formData.oggetto)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`,
    )
    const mailtoLink = `mailto:info@aircoach.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Hai domande su AIR Coach? Vuoi richiedere l'accesso alla beta? Siamo qui per aiutarti. Contattaci in
            qualsiasi momento!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Invia un Messaggio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      required
                      placeholder="Il tuo nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="oggetto">Oggetto *</Label>
                    <Select value={formData.oggetto} onValueChange={(value) => handleInputChange("oggetto", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sono interessato ad AIR Coach">Sono interessato ad AIR Coach</SelectItem>
                        <SelectItem value="Feedback sull'utilizzo dell'app">Feedback sull'utilizzo dell'app</SelectItem>
                        <SelectItem value="Richiesta informazioni">Richiesta informazioni</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="messaggio">Messaggio *</Label>
                    <Textarea
                      id="messaggio"
                      value={formData.messaggio}
                      onChange={(e) => handleInputChange("messaggio", e.target.value)}
                      required
                      placeholder="Scrivi qui il tuo messaggio..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Informazioni di Contatto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@aircoach.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Supporto Beta</p>
                    <p className="text-muted-foreground">Disponibile per beta tester</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="font-medium mb-3">Seguici sui Social</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  Domande Frequenti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>A cosa serve AIR Coach?</AccordionTrigger>
                    <AccordionContent>
                      AIR Coach è un'applicazione pensata per guidare e consigliare in sicurezza gli allievi paracadutisti.
                      Una volta installata e configurata sul telefono, l'applicazione sarà disponibile per dare consigli e informazioni per imparare e crescere in sicurezza nel mondo del paracadutismo!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Come posso iniziare?</AccordionTrigger>
                    <AccordionContent>
                      Attualmente AIR Coach è in fase beta. Puoi richiedere l'accesso compilando il modulo di contatto. Sarà nostra cura ricontattarti non appena ci saranno posti disponibili per la beta.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Quando sarà disponibile pubblicamente?</AccordionTrigger>
                    <AccordionContent>
                      Stiamo lavorando duramente per completare la fase beta. Prevediamo di rilasciare la versione
                      pubblica nel prossimo futuro. Iscriviti alla nostra newsletter per ricevere aggiornamenti.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>AIR Coach sostituisce l'istruttore?</AccordionTrigger>
                    <AccordionContent>
                      Assolutamente no! AIR Coach è uno strumento utile che supporta l'apprendimento, ma non
                      sostituisce mai l'esperienza e la supervisione di un istruttore qualificato. La sicurezza rimane
                      sempre la priorità.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Come posso fornire feedback?</AccordionTrigger>
                    <AccordionContent>
                      Il tuo feedback è prezioso! Puoi inviarci suggerimenti e commenti utilizzando il modulo di
                      contatto, selezionando "Feedback sull'utilizzo dell'app" come oggetto. Leggiamo e consideriamo
                      ogni messaggio ricevuto.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>E per saperne di più?</AccordionTrigger>
                    <AccordionContent>
                      Se sei curioso o interessato al progetto, se ti interessa oppure se vuoi candidarti per contribuire, scrivici un messaggio! ti ricontatteremo al più presto.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
