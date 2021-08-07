class App
  def call(env)
    sleep(3.0)
    [200, {'Content-Type' => 'text/plain'}, ["Hello\nWorld\n"]]
  end
end

run App.new