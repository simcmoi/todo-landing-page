import { motion } from "framer-motion"
import { ArrowRight, Zap, Search, Tag, Keyboard } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Screenshots() {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#97acc8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#ffdd00]/5 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr,1.5fr,1fr] gap-12 items-center max-w-7xl mx-auto">
          
          {/* Screenshot gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group hidden lg:block"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#97acc8] to-[#7a92ad] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative rounded-2xl border-2 border-[#97acc8]/30 bg-card shadow-2xl overflow-hidden">
              {/* macOS controls */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
              
              {/* Screenshot vertical */}
              <div className="aspect-[9/16] bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-6">
                <div className="w-full h-full flex flex-col gap-3">
                  {/* Mock interface */}
                  <div className="bg-card/60 backdrop-blur rounded-lg border border-[#97acc8]/20 p-4 flex-1">
                    <div className="space-y-3">
                      <div className="h-3 bg-[#ffdd00]/30 rounded w-24 mb-4"></div>
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded">
                          <div className="w-4 h-4 rounded border-2 border-[#97acc8]"></div>
                          <div className={`h-2 bg-foreground/15 rounded ${i % 3 === 0 ? 'w-3/4' : i % 2 === 0 ? 'w-2/3' : 'w-4/5'}`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-xs text-muted-foreground/40">Screenshot 1</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explications centrales avec flèches */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#97acc8]/10 flex items-center justify-center border border-[#97acc8]/20">
                <Zap className="w-6 h-6 text-[#97acc8]" />
              </div>
              <div className="flex-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3 className="font-bold text-lg mb-2 cursor-help inline-flex items-center gap-2">
                        Shift+Space et hop
                        <Keyboard className="w-4 h-4 text-muted-foreground" />
                      </h3>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Appuyez sur Shift+Espace n'importe où pour ouvrir l'overlay</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="text-muted-foreground text-sm">
                  L'overlay apparaît instantanément par-dessus toutes vos fenêtres. Pas besoin de changer d'app.
                </p>
              </div>
              <ArrowRight className="hidden lg:block w-6 h-6 text-[#97acc8]/40 flex-shrink-0" />
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffdd00]/10 flex items-center justify-center border border-[#ffdd00]/20">
                <Tag className="w-6 h-6 text-[#ffdd00]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Organisation simplifiée</h3>
                <p className="text-muted-foreground text-sm">
                  Multi-listes, tags colorés, drag & drop. Tout pour rester organisé sans complexité.
                </p>
              </div>
              <ArrowRight className="hidden lg:block w-6 h-6 text-[#ffdd00]/40 flex-shrink-0" />
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#97acc8]/10 flex items-center justify-center border border-[#97acc8]/20">
                <Search className="w-6 h-6 text-[#97acc8]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Recherche ultra-rapide</h3>
                <p className="text-muted-foreground text-sm">
                  Même avec 500 tâches, retrouvez la bonne en 2 secondes grâce à la recherche instantanée.
                </p>
              </div>
              <ArrowRight className="hidden lg:block w-6 h-6 text-[#97acc8]/40 flex-shrink-0" />
            </div>

            {/* CTA discret */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                Interface minimaliste pensée pour ne jamais vous distraire de votre travail.
              </p>
            </div>
          </motion.div>

          {/* Screenshot droit */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group hidden lg:block"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#ffdd00] to-[#f5cc00] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative rounded-2xl border-2 border-[#ffdd00]/30 bg-card shadow-2xl overflow-hidden">
              {/* macOS controls */}
              <div className="flex items-center gap-2 px-3 py-2.5 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
              
              {/* Screenshot vertical */}
              <div className="aspect-[9/16] bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center p-6">
                <div className="w-full h-full flex flex-col gap-3">
                  {/* Mock interface - version avec tags */}
                  <div className="bg-card/60 backdrop-blur rounded-lg border border-[#ffdd00]/20 p-4 flex-1">
                    <div className="space-y-3">
                      <div className="flex gap-2 mb-4">
                        <div className="h-2.5 bg-[#97acc8]/40 rounded-full w-16"></div>
                        <div className="h-2.5 bg-[#ffdd00]/40 rounded-full w-20"></div>
                      </div>
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="space-y-1.5 p-2 hover:bg-muted/30 rounded">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded border-2 border-[#ffdd00]"></div>
                            <div className={`h-2 bg-foreground/15 rounded ${i % 2 === 0 ? 'w-2/3' : 'w-3/4'}`}></div>
                          </div>
                          {i % 3 === 0 && (
                            <div className="flex gap-1 ml-6">
                              <div className="h-1.5 bg-[#97acc8]/30 rounded-full w-10"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-xs text-muted-foreground/40">Screenshot 2</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
