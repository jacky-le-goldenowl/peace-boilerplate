# frozen_string_literal: true

module ApplicationHelper
  def component(name, *, **, &)
    component = name.to_s.camelize.constantize::Component
    render(component.new(*, **), &)
  end
end
