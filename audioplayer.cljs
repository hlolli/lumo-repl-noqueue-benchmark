(ns audioplayer)

(def sp (js/require "play-sound"))

(def player (sp #js {"players" #js ["aplay"
                                    "afplay"
                                    "mplayer"
                                    "play"
                                    "omxplayer"
                                    "cmdmp3"]}))

(def octave ["wav/60.wav"
             "wav/61.wav"
             "wav/62.wav"
             "wav/63.wav"
             "wav/64.wav"
             "wav/65.wav"
             "wav/66.wav"
             "wav/67.wav"
             "wav/68.wav"
             "wav/69.wav"
             "wav/70.wav"
             "wav/71.wav"
             "wav/72.wav"])

(defn play [file]
  (.play player file (fn [])))

(def index (atom 0))

(js/setInterval (fn []
                  (println "playing note")
                  (play (nth octave @index))
                  (reset! index (mod (inc @index) (count octave)))) 200)


