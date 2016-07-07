package com.heb.assortment.core.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Home controller to initialize the
 * application
 */
@Controller
@RequestMapping(value={"", "/", "home", "/home"})
public class HomeController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome() {
		return "home";
	}
}